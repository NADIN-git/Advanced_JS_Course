const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './public/src/shop.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'shop.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }, ],
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },

            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000
                    }
                }
            },

            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            }

        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}