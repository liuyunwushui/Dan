# Dan
接发任务平台

#框架配置信息
、、、
- vue-cli
- axios
- sass
- postcss
、、、

###postcss
前缀自动补全  autoprefixer

#启动
npm start  
    端口号：8082

#目录结构

|-- build                                   // 项目构建(webpack)相关代码
|   |-- build.js                            // 生产环境构建代码
|   |-- check-version.js                    // 检查node、npm等版本
|   |-- dev-client.js                       // 热重载相关
|   |-- dev-server.js                       // 构建本地服务器
|   |-- utils.js                            // 构建工具相关
|   |-- webpack.base.conf.js                // webpack基础配置
|   |-- webpack.dev.conf.js                 // webpack开发环境配置
|   |-- webpack.prod.conf.js                // webpack生产环境配置
|-- config                                  // 项目开发环境配置
|   |-- dev.env.js                          // 开发环境变量
|   |-- index.js                            // 项目一些配置变量
|   |-- prod.env.js                         // 生产环境变量
|   |-- test.env.js                         // 测试环境变量
|-- src                                     // 源码目录
|   |-- components                          // vue公共组件
|   |-- pages                               // 页面管理
|   |   |-- index                           // 主页面
|   |   |   |-- index.html                  // 页面入口
|   |   |   |-- index.js                    // 程序入口文件，加载各种公共组件
|   |   |-- zeng                            // 待定 （多页面）
|-- static                                  // 静态文件，比如一些图片，json数据等
|-- .babelrc                                // ES6语法编译配置
|-- .editorconfig                           // 定义代码格式
|-- .gitignore                              // git上传需要忽略的文件格式
|-- README.md                               // 项目说明
|-- package.json                            // 项目基本信息