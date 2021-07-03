/*
 * @Description: 
 * @Date: 2021-07-03 12:36:09
 * @Author: 楊皮皮
 */
module.exports = {
    devServer: {
        // port: 9000,
        // publicPath: '/',
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080',
                // secure: false,
                changeOrigin: true,
                // pathRewrite: { '^/api': '' }
            },
        },
    },
}