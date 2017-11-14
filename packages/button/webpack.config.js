const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bundle: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js',
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist'),
        publicPath: '/',
    },
    devServer: {
        hot: true,
        overlay: true,
        contentBase: path.resolve('dist'),
        publicPath: '/',
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: { cacheDirectory: true },
                }],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            inject: false,
            template: require.resolve('html-webpack-template/index.ejs'),
            title: 'react-fela example',
            appMountId: 'app',
            mobile: true,
            window: {},
        }),
    ],
};
