const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundel.js',
        path: path.resolve(__dirname, './dist')
    },
    watch:true,
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name][contenthash:5].[ext]'
                        },
                    }
                ],

            },
             {
                test: /\.css$/,
                use: [
                    
                    MiniCssExtractPlugin.loader,'css-loader',
                        // options: {
                        //     name: '[name][contenthash:5].[ext]'
                        // },
                    
                ],

            },
             {
                test: /\.scss$/,
                use: [
                    
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                        // options: {
                        //     name: '[name][contenthash:5].[ext]'
                        // },
                    
                ],

            }
        ]
    },
    plugins:[
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename:'styles.css'
        }),
    
    ]
}