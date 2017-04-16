package controller

import (
	"crypto/md5"
	"crypto/rand"
	"fmt"
	"io"
	"log"

	"net/http"

	"time"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"github.com/kidsdynamic/childrenlab_v2/constants"
	"github.com/kidsdynamic/childrenlab_v2/database"
	"github.com/kidsdynamic/childrenlab_v2/global"
	"github.com/kidsdynamic/childrenlab_v2/model"
)

const (
	SignedUserKey = "SignedUser"
)

func randToken() string {
	b := make([]byte, 8)
	rand.Read(b)
	h := md5.New()
	io.WriteString(h, fmt.Sprintf("%x", b))
	return fmt.Sprintf("%x", h.Sum(nil))
}

func Auth(c *gin.Context) {
	authToken := c.Request.Header.Get("x-auth-token")
	if authToken == "" {
		c.JSON(http.StatusForbidden, gin.H{})
		c.Abort()
		return
	}

	db := database.NewGORM()
	defer db.Close()

	var user model.User

	err := db.Table("user").Joins("JOIN authentication_token a ON user.email = a.email").Where("a.token = ?", authToken).Find(&user).Error

	if err != nil {
		c.JSON(http.StatusForbidden, gin.H{})
		c.Abort()
		return
	}

	log.Printf("\nLogged in user: %#v\n", user)
	c.Set(SignedUserKey, user)

	c.Next()

}

func AdminAuth(c *gin.Context) {
	authToken := c.Request.Header.Get("x-auth-token")
	if authToken == "" {
		c.JSON(http.StatusForbidden, gin.H{})
		c.Abort()
		return
	}

	db := database.NewGORM()
	defer db.Close()

	var user model.User

	err := db.Table("user").Joins("JOIN authentication_token a ON user.email = a.email").Joins("JOIN role ON user.role_id = role.id").Where("a.token = ? and authority = ?", authToken, model.ROLE_ADMIN).Find(&user).Error

	if err != nil {
		c.JSON(http.StatusForbidden, gin.H{})
		c.Abort()
		return
	}

	log.Printf("\nLogged in admin: %#v\n", user)
	c.Set(SignedUserKey, user)

	c.Next()

}

func SuperAdminAuth(c *gin.Context) {
	authToken := c.Request.Header.Get("x-auth-token")
	if authToken == "" {
		c.JSON(http.StatusForbidden, gin.H{})
		c.Abort()
		return
	}

	if authToken != global.SuperAdminToken {
		c.JSON(http.StatusForbidden, gin.H{})
		c.Abort()
		return
	}
	c.Next()
}

func GetSignedInUser(c *gin.Context) model.User {
	var user model.User
	signedUser, ok := c.Get(SignedUserKey)

	if !ok {
		c.JSON(http.StatusForbidden, gin.H{
			"message": "can't find login user",
		})
		c.Abort()
		return user
	}

	user = signedUser.(model.User)
	return user
}

func GetKidByUserIdAndKidId(db *gorm.DB, userId, kidId int64) (model.Kid, error) {
	var kid model.Kid

	err := db.Where("parent_id = ? AND id = ?", userId, kidId).Preload("Parent").Find(&kid).Error
	return kid, err
}

func GetKidByMacID(db *gorm.DB, macID string) (model.Kid, error) {
	var kid model.Kid

	err := db.Where("mac_id = ?", macID).Preload("Parent").First(&kid).Error
	return kid, err
}

func GetKidsByUser(user model.User) ([]model.Kid, error) {
	db := database.NewGORM()
	defer db.Close()
	var kids []model.Kid

	err := db.Where("parent_id = ?", user.ID).Find(&kids).Error
	if err == gorm.ErrRecordNotFound {
		return kids, nil
	}

	return kids, err
}

func GetUserRole(db *gorm.DB) model.Role {
	var role model.Role
	if err := db.Where("authority = ?", "ROLE_USER").First(&role).Error; err != nil {
		panic(err)
	}

	return role
}

func GetNowTime() time.Time {
	now := time.Now()

	s := fmt.Sprintf("%04d-%02d-%02dT%02d:%02d:%02dZ", now.Year(), now.Month(), now.Day(), now.Hour(), now.Minute(), now.Second())
	t, err := time.Parse(constants.TimeLayout, s)

	if err != nil {
		fmt.Printf("Error on get now time. %#v", err)

	}

	return t
}

func HasPermissionToKid(db *gorm.DB, user *model.User, kidID []int64) bool {

	var exists bool = true
	for _, id := range kidID {
		row := db.Raw("SELECT EXISTS(SELECT id FROM kids WHERE id = ? and parent_id = ? LIMIT 1)", id, user.ID).Row()

		row.Scan(&exists)

		if !exists {
			subhostRow := db.Raw("SELECT EXISTS(SELECT id FROM sub_host s JOIN sub_host_kid sk ON s.id = sk.sub_host_id WHERE s.request_from_id = ? and sk.kid_id = ? and s.status = ? LIMIT 1)", user.ID, id, SubHostStatusAccepted).Row()

			subhostRow.Scan(&exists)
			if !exists {
				return false
			}
		}
	}

	return exists

}
