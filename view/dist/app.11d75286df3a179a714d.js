webpackJsonp([1],{160:function(t,e,n){"use strict";var i=n(1);e.APP_CONFIG=new i.OpaqueToken("app.config"),e.AppConfig={apiEndpoint:"https://childrenlab.com/v1/"}},226:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=this&&this.__param||function(t,e){return function(n,i){e(n,i,t)}},c=n(1),a=n(100);n(171);var s=n(160),f=function(){function ActivityService(t,e){this.http=t,this.config=e,this.activityListUrl="activity/list",this.activityRawListUrl="admin/activity/raw"}return ActivityService.prototype.getList=function(t){return this.http.get(this.config.apiEndpoint+this.activityListUrl+"/"+t).toPromise().then(function(t){return t.json()}).catch(this.handlerError)},ActivityService.prototype.getRawList=function(t){return this.http.get(this.config.apiEndpoint+this.activityRawListUrl+"/"+t).toPromise().then(function(t){return t.json()}).catch(this.handlerError)},ActivityService.prototype.handlerError=function(t){return console.error("Error: ",t),Promise.reject(t.message||t)},ActivityService=i([c.Injectable(),o(1,c.Inject(s.APP_CONFIG)),r("design:paramtypes",[a.Http,Object])],ActivityService)}();e.ActivityService=f},343:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=n(1),c=n(102),a=n(72),s=n(226);n(249);var f=function(){function ActivityComponent(t,e,n){this.activityService=t,this.route=e,this.location=n,this.error="",this.activities=[]}return ActivityComponent.prototype.ngOnInit=function(){var t=this;this.route.params.switchMap(function(e){return t.activityService.getList(+e.kidId)}).subscribe(function(e){return t.activities=e})},ActivityComponent.prototype.goBack=function(){this.location.back()},ActivityComponent=i([o.Component({selector:"activity",template:n(673)}),r("design:paramtypes",[s.ActivityService,c.ActivatedRoute,a.Location])],ActivityComponent)}();e.ActivityComponent=f},344:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=n(1),c=n(102),a=n(72),s=n(226);n(249);var f=function(){function ActivityRawComponent(t,e,n){this.activityService=t,this.route=e,this.location=n,this.error="",this.activities=[]}return ActivityRawComponent.prototype.ngOnInit=function(){var t=this;this.route.params.switchMap(function(e){return t.activityService.getRawList(e.macId)}).subscribe(function(e){return t.activities=e})},ActivityRawComponent.prototype.goBack=function(){this.location.back()},ActivityRawComponent=i([o.Component({selector:"activity_raw",template:n(674)}),r("design:paramtypes",[s.ActivityService,c.ActivatedRoute,a.Location])],ActivityRawComponent)}();e.ActivityRawComponent=f},345:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=n(1),c=function(){function DashboardComponent(){}return DashboardComponent=i([o.Component({selector:"app",template:'\n    <nav class="navbar navbar-default"> \n        <div class="container-fluid"> \n            <a routerLink="/user" class="btn btn-default navbar-btn">User</a>\n            <a routerLink="/device" class="btn btn-default navbar-btn">Device-Kid</a>\n        </div>\n    </nav>\n    \n    <router-outlet></router-outlet>\n    '}),r("design:paramtypes",[])],DashboardComponent)}();e.DashboardComponent=c},346:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=n(1),c=n(347),a=function(){function KidComponent(t){this.kidService=t,this.error="",this.kids=[]}return KidComponent.prototype.ngOnInit=function(){var t=this;this.kidService.getList().then(function(e){return t.kids=e}).catch(function(e){console.log(e),t.error=e})},KidComponent=i([o.Component({selector:"device",template:n(675)}),r("design:paramtypes",[c.KidService])],KidComponent)}();e.KidComponent=a},347:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=this&&this.__param||function(t,e){return function(n,i){e(n,i,t)}},c=n(1),a=n(100);n(171);var s=n(160),f=function(){function KidService(t,e){this.http=t,this.config=e,this.kidListUrl="admin/kids/list"}return KidService.prototype.getList=function(){return this.http.get(""+(this.config.apiEndpoint+this.kidListUrl)).toPromise().then(function(t){return t.json()}).catch(this.handlerError)},KidService.prototype.handlerError=function(t){return console.error("Error: ",t),Promise.reject(t.message||t)},KidService=i([c.Injectable(),o(1,c.Inject(s.APP_CONFIG)),r("design:paramtypes",[a.Http,Object])],KidService)}();e.KidService=f},348:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=this&&this.__param||function(t,e){return function(n,i){e(n,i,t)}},c=n(1),a=n(100);n(171);var s=n(160),f=function(){function UserService(t,e){this.http=t,this.config=e,this.userListUrl="user/userList"}return UserService.prototype.getUserList=function(){return this.http.get(""+(this.config.apiEndpoint+this.userListUrl)).toPromise().then(function(t){return t.json()}).catch(this.handlerError)},UserService.prototype.handlerError=function(t){return console.error("Error: ",t),Promise.reject(t.message||t)},UserService=i([c.Injectable(),o(1,c.Inject(s.APP_CONFIG)),r("design:paramtypes",[a.Http,Object])],UserService)}();e.UserService=f},349:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=n(1),c=n(348),a=function(){function UserComponent(t){this.userService=t,this.error="",this.users=[]}return UserComponent.prototype.ngOnInit=function(){var t=this;this.userService.getUserList().then(function(e){return t.users=e}).catch(function(e){console.log(e),t.error=e})},UserComponent=i([o.Component({selector:"user",template:n(676)}),r("design:paramtypes",[c.UserService])],UserComponent)}();e.UserComponent=a},409:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=n(1),c=n(101),a=n(102),s=n(100),f=n(345),d=n(349),u=n(346),p=n(343),l=n(344),h=n(348),v=n(347),y=n(226),m=n(160),b=n(522),g=function(){function MainModule(){}return MainModule=i([o.NgModule({imports:[c.BrowserModule,a.RouterModule,s.HttpModule,b.Routing],declarations:[f.DashboardComponent,d.UserComponent,u.KidComponent,p.ActivityComponent,l.ActivityRawComponent],providers:[h.UserService,v.KidService,y.ActivityService,{provide:m.APP_CONFIG,useValue:m.AppConfig}],bootstrap:[f.DashboardComponent]}),r("design:paramtypes",[])],MainModule)}();e.MainModule=g},412:function(t,e){},522:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=n(1),c=n(102),a=n(349),s=n(345),f=n(346),d=n(343),u=n(344),p=[{path:"dashboard",component:s.DashboardComponent},{path:"user",component:a.UserComponent},{path:"device",component:f.KidComponent},{path:"activity/:kidId",component:d.ActivityComponent},{path:"activity_raw/:macId",component:u.ActivityRawComponent}],l=function(){function Routing(){}return Routing=i([o.NgModule({imports:[c.RouterModule.forRoot(p,{useHash:!0})],exports:[c.RouterModule]}),r("design:paramtypes",[])],Routing)}();e.Routing=l},673:function(t,e){t.exports='<h3> Activity - </h3>\n<a routerLink="/device" class="btn btn-link"><span class="glyphicon glyphicon-chevron-left"></span>Back</a>\n<div class="error">\n    {{ error }}\n</div>\n<table class="table table-striped table-hover">\n    <thead>\n    <tr>\n        <th>\n            ID\n        </th>\n        <th>\n            Type\n        </th>\n        <th>\n            Steps\n        </th>\n        <th>\n            Date\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor="let activity of activities">\n        <td>\n            {{ activity.id }}\n        </td>\n        <td>\n            {{ activity.type }}\n        </td>\n        <td>\n            {{ activity.steps }}\n        </td>\n        <td>\n            {{ activity.receivedDate }}\n        </td>\n\n    </tr>\n    </tbody>\n\n</table>'},674:function(t,e){t.exports='<h3> Activity - </h3>\n<a routerLink="/device" class="btn btn-link"><span class="glyphicon glyphicon-chevron-left"></span>Back</a>\n<div class="error">\n    {{ error }}\n</div>\n<table class="table table-striped table-hover">\n    <thead>\n    <tr>\n        <th>\n            ID\n        </th>\n        <th>\n            Indoor\n        </th>\n        <th>\n            Outdoor\n        </th>\n        <th>\n            Time\n        </th>\n        <th>\n            Timezone Offset\n        </th>\n        <th>\n            Date Created\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor="let activity of activities">\n        <td>\n            {{ activity.id }}\n        </td>\n        <td style="color: darkcyan;">\n            {{ activity.indoorActivity }}\n        </td>\n        <td>\n            {{ activity.outdoorActivity }}\n        </td>\n        <td>\n            {{ activity.time }}\n        </td>\n        <td>\n            {{ activity.timeZoneOffset }}\n        </td>\n        <td>\n            {{ activity.dateCreated }}\n        </td>\n\n    </tr>\n    </tbody>\n\n</table>'},675:function(t,e){t.exports='<h3> Device-Kid List</h3>\n<div class="error">\n    {{ error }}\n</div>\n<table class="table table-striped table-hover">\n    <thead>\n    <tr>\n        <th>\n            ID\n        </th>\n        <th>\n            Activity\n        </th>\n        <th>\n            Name\n        </th>\n        <th>\n            Mac ID\n        </th>\n        <th>\n            Profile\n        </th>\n        <th>\n            Parent\n        </th>\n        <th>\n            Date Created\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor="let kid of kids">\n        <td>\n            {{ kid.id }}\n        </td>\n        <td>\n            <a [routerLink]="[\'/activity\', kid.id]">Activity</a>\n            |\n            <a [routerLink]="[\'/activity_raw\', kid.macId]">Raw Data</a>\n        </td>\n        <td>\n            {{ kid.name }}\n        </td>\n        <td>\n            {{ kid.macId }}\n        </td>\n        <td>\n            {{ kid.profile }}\n        </td>\n        <td>\n            {{ kid.parent.email }}\n        </td>\n        <td>\n            {{ kid.dateCreated }}\n        </td>\n\n    </tr>\n    </tbody>\n\n</table>'},676:function(t,e){t.exports='<h3> User List</h3>\n<div class="error">\n    {{ error }}\n</div>\n<table class="table table-striped table-hover">\n    <thead>\n    <tr>\n        <th>\n            ID\n        </th>\n        <th>\n            Email\n        </th>\n        <th>\n            Name(F L)\n        </th>\n        <th>\n            Profile\n        </th>\n        <th>\n            iOS ID\n        </th>\n        <th>\n            Sign-up Date\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor="let user of users">\n        <td>\n            {{ user.id }}\n        </td>\n        <td>\n            {{ user.email }}\n        </td>\n        <td>\n            {{ user.firstName }} {{ user.lastName }}\n        </td>\n        <td>\n            {{ user.profile }}\n        </td>\n        <td>\n            {{ user.iOSID }}\n        </td>\n        <td>\n            {{ user.dateCreated }}\n        </td>\n    </tr>\n    </tbody>\n\n</table>'},941:function(t,e,n){"use strict";var i=n(178),r=n(409),o=n(1);n(412),/localhost/.test(document.location.host)||o.enableProdMode(),i.platformBrowserDynamic().bootstrapModule(r.MainModule)}},[941]);