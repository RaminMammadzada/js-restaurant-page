const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                // type: 'asset/resource',
                loader: "file-loader" ,
                // use: [
                //     {
                //         loader: "file-loader" ,
                //         options: {
                //             name: "[name].[ext]",
                //             outputPath: "assets/images/",
                //             publicPath: "assets/images/"
                //         }
                //     }
                // ]
            },

        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ]
};