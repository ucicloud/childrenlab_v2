package router

import (
	"github.com/gin-gonic/gin"
	"github.com/kidsdynamic/childrenlab_v2/app/controller"
)

func initAdminRouter(r *gin.Engine) {
	superAdminAuthAPI := r.Group("/superAdmin")
	superAdminAuthAPI.Use(controller.SuperAdminAuth)
	superAdminAuthAPI.POST("/createAdminUser", controller.CreateAdminUser)

	adminAuthAPI := r.Group("/admin")
	adminAuthAPI.Use(controller.AdminAuth)
	r.POST("/admin/login", controller.AdminLogin)
	adminAuthAPI.GET("/userList", controller.GetAllUser)
	adminAuthAPI.GET("/kidList", controller.GetAllKidList)
	adminAuthAPI.GET("/activityList/:kidId", controller.GetActivityListForAdmin)
	adminAuthAPI.GET("/activityRawList/:macId", controller.GetActivityRawForAdmin)
	adminAuthAPI.GET("/dashboard", controller.Dashboard)
	adminAuthAPI.DELETE("/deleteMacID", controller.DeleteMacID)
	adminAuthAPI.GET("/fwList", controller.GetFwFileList)
	adminAuthAPI.GET("/getBatteryStatus/:macId", controller.GetBatteryStatus)
}
