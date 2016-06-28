var path = require('path');
var commonConfig = require('./webpack.common.config');

var output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'www.example.com/build/',
    filename: 'bundle.js'
};

module.exports = Object.assign(commonConfig, {
    output: output,
    plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
    ],
    module: {
        loaders: commonConfig.module.loaders.concat({
            test: /\.s?css$/,
            exclude: /(node_modules)/,
            loaders: ['style', 'css', 'postcss-loader', 'sass'] // For single bundle js
        })
    }
});
