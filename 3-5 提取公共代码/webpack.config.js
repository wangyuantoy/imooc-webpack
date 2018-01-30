var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: {
        'pageA': './src/pageA',
        'pageB': './src/pageB',
        'vendor': ['lodash']
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    // 提取公共代码
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        })
    ]
}