/**
 * babel-loader: 负责 es6 语法转化
 * @babel/preset-env: 包含 es6、7 等版本的语法转化规则
 * @babel/polyfill: es6 内置方法和函数转化垫片
 * babel-plugin-transform-runtime: 避免 polyfill 污染全局变量
 * 更多资料：
 * polyfill 引入：https://www.babeljs.cn/docs/usage/polyfill/
 * babel-preset-env 配置：https://www.babeljs.cn/docs/plugins/preset-env/
 */
const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './app.js' // 需要打包的文件入口
  },
  output: {
    publicPath: __dirname + '/dist/', // js 引用的路径或者 CDN 地址
    path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
    filename: 'bundle.js' // 打包后生产的 js 文件
  },
  plugins: [
    new CleanWebpackPlugin() // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // 使用正则来匹配 js 文件
        exclude: /nodes_modules/, // 排除依赖包文件夹
        use: {
          loader: 'babel-loader' // 使用 babel-loader
        }
      }
    ]
  }
}
