const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.port || 3000;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        plugins: [
                            ['import', { libraryName: "antd", style: true }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[local]___[hash:base64:5]"
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/i,
                type: 'asset/resource' // https://webpack.js.org/guides/asset-modules/
            }
        ]
    },

    devServer: {
        port: port,
        historyApiFallback: true,   // This section is for everyone who ran into this problem in development using webpack-dev-server.. Just as above, what we need to do it tell Webpack Dev Server to redirect all server requests to /index.html. There are just two properties in your webpack config you need to set to do this, publicPath and historyApiFallback.
        proxy: {
            '/api': {
                target: "http://localhost:8097",
                pathRewrite: { "/api": "" },
                changeOrigin: true
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: './public/favicon.ico'
        })
    ]
}