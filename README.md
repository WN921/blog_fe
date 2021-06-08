# 项目简介
博客网站前端前端的作用是从博客后端程序取得数据后展示，目前有首页（目录）、博客详情页两部分。  
博客网站前端使用React作为UI层库，同时搭配了Redux、React-Redux、React-Router等常见的React相关库，使用Ant Design作为UI组件库，使用Axios进行HTTP通信，使用marked解析MarkDown格式字符串。

## 安装使用
此前端项目使用create-react-app搭建，其开发过程依赖于Node.js，生成的Build文件夹后部署无需Node.js。在下载运行前，要确保已经安装了Node.js，最新稳定版即可。
### 安装过程
第一步，下载并安装依赖
```
//下载后端程序
git clone https://github.com/WN921/blog_fe.git

// 进入项目目录后，安装运行依赖
cd blog_fe
npm install --registry=https://registry.npm.taobao.org
```

第二步，修改网络请求的配置文件。
首先进入，项目下src/api目录，打开config.js文件，修改其中的baseUrl常量。将其修改后后端项目的URL（如：http://1.15.125.162:3100）。

第三步，启动项目，运行无误后可二次开发，最后生成Build文件夹部署。
```
//启动项目
npm start

//个人信息设置、二次开发参见下方

//生成build文件夹
npm run build
```

## 网站页面简介
### 首页
首页分为三部分，顶栏、右侧栏、目录、底部。
![](image\个人博客\博客网站前端-首页-1.PNG)
![](image\个人博客\博客网站前端-首页-2.PNG)
顶栏说明的是博客的标题、副标题，它们在任何尺寸的屏幕中都会显示。修改这两项应该在src/components/Headr.js文件中修改，直接修改字符串即可。  
侧栏说明的是博主的个人信息，它在小屏幕中不会显示。修改这一项应该在src/components/Author.js中直接修改，修改字符串即可。  
目录按照发布时间倒序显示博客中的文章，每一篇博客都会显示标题、简介、标签、创建、修改时间。点击即可进入详情页。为了让前端可以直接固定显示某一位用户的博客，需要在src/api/config.js中修改userId为合适的值。  
底部说明的是备案号和网站的技术栈，这部分对应src/conponents/Footer.js。
### 博客详情页
![](image\个人博客\博客详情页.PNG)
博客详情页包括标题、内容、右侧下方的导航栏。这里没有额外要配置的地方，如果目录能够正确获取博客列表，那么点击后它将自动请求点击博客的详细内容并解析。

## 源码结构
```
.
|-- App.js
|-- api
|   |-- config.js
|   `-- request.js
|-- components
|   |-- Author.js
|   |-- Footer.js
|   |-- Header.js
|   `-- index.js
|-- index.js
|-- logo.svg
|-- pages
|   |-- BlogHome
|   |   |-- components
|   |   |   |-- BlogItem.js
|   |   |   `-- index.js
|   |   |-- index.js
|   |   |-- store
|   |   |   |-- actioncreators.js
|   |   |   |-- constants.js
|   |   |   |-- index.js
|   |   |   `-- reducer.js
|   |   `-- style.js
|   |-- BlogPage
|   |   |-- index.js
|   |   `-- store
|   |       |-- actioncreators.js
|   |       |-- constants.js
|   |       |-- index.js
|   |       `-- reducer.js
|   `-- index.js
|-- static
|   |-- Ace.jpg
|   `-- style
|       |-- components
|       |   |-- author.css
|       |   |-- footer.css
|       |   `-- header.css
|       `-- pages
|           |-- blogPage.css
|           `-- common.css
`-- store
    |-- index.js
    `-- reducer.js
```

* App.js和index.js是整个项目的入口。
* api是HTTP接口相关的设置和接口包装。
* components是首页基本组件。
* pages里的两个文件夹对应两个页面，首页和详情页。
* static里是一些css文件和图片。
* store里是redux的全局reducer和store。

总体上博客网站前端的代码比较简单，熟悉react库的同学可直接上手。