const baseWebpackConfig = require('./webpack.base.conf')

const merge = require('webpack-merge')

const portfinder = require('portfinder')

let config = merge(baseWebpackConfig, {
    devServer: {
        // 输出直接指向其目录
        // contentBase: path.join(__dirname, '../static'),
        // publicPath: '/', // 与output.publicPath差不多
        compress: true, // 所有服务都启用gzip压缩
        overlay: {
            warnings: true,
            errors: true
        },
        port: 9000,
        hot: true, // 启动热更新
        host: '0.0.0.0',
        clientLogLevel: 'none',
        useLocalIp: true,
        quiet: true // 除了初始启动信息之外的任何内容都不会被打印到控制台
    },
    devtool: 'cheap-module-eval-source-map'
});

// 获取端口号
module.exports = new Promise((resolve, reject)=>{
    portfinder.basePort = process.env.PORT || config.devServer.port;
    portfinder.getPort((err, port)=>{
        if (err) {
            reject(err)
        } else {
            process.env.PORT = port;
            config.devServer.port = port;
            resolve(config)
        }
    })
});
