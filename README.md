易果生鲜商城项目
=====================

## 项目简介： ##

##### 
* 基本实现基本页面跳转（主页/列表页/详情页/登录/注册/购物车）
* 实现登录/注册功能
* 实现购物车功能
* 实现后台管理功能
* 后台能看所有数据/添加商品/查看订单功能

## 如何安装 ##

#### 安装前提

##### 安装 iis express 环境

[点击查看教程](http://www.cnblogs.com/IPrograming/archive/2013/05/26/Configuration_IIS_Express.html)

#### 配置环境

	
> 修改iis config：D:\Documents\IISExpress\config\applicationhost.config 配置站点

        <site name="WebSite1" id="1" serverAutoStart="true">
             <application path="/">
                    <virtualDirectory path="/" physicalPath="C:\Users\Administrator\WebstormProjects\untitled3\webmanager\webmanager" />
              </application>
           <bindings>
                <binding protocol="http" bindingInformation=":8080:10.9.163.117" />
           </bindings>
      </site>

### 将代码复制到根目录下

    本人根目录：C:\Users\Administrator\WebstormProjects\untitled3\webmanager\webmanager

##  程序 run 起来

启动iis express 服务

前端主页链接（注意ip/端口）：[http://10.9.163.117:8080/httpview/yiguo/index.html](http://10.9.163.117:8080/httpview/yiguo/index.html)

后台页面链接（注意ip/端口）：[http://10.9.163.117:8080/httpview/admin/admin.html](http://10.9.163.117:8080/httpview/admin/admin.html)


