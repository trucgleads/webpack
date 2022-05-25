const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // cac file output
    entry: {
        index: './index.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    // },

                    "css-loader",
                    "sass-loader"
                ],
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    optimization: {
        // Cache vendor
        // splitChunks: {
        //     cacheGroups: {
        //         vendors: {
        //             chunks: "all",
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendor',
        //             enforce: true
        //         },
        //     }
        // },
        // runtimeChunk: 'single',
    },

    plugins: [
        // new CleanWebpackPlugin(),
        // parse template duoi khac thanh HTML
        new HtmlWebpackPlugin({
            chunks: ['index'],
            template: './index.html',
            filename: 'index.html'
        }),
        // Extract CSS ra khoi bundle thanh file rieng
        // new MiniCssExtractPlugin({
        //     chunks: ['bundle', 'vendors','themeDark','themeLight'],
        //     filename: '/[name].css',
        //     chunkFilename: "[name].css",
        // }),
    ],
}