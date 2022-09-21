const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {

    // check if mode of running server is development or production
    mode: isDevelopment ? 'development' : 'production',

    // entry point of the entire application
    entry: './src/index.js',

    // development server to run on port 3000, open is to open the website
    devServer: {
        open: true,
        port: 3000,
        client: {
            overlay: false
        }
    },
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },

    module: {
        rules: [{
                test: /.\jpe?g|png$/,
                exclude: /node_modules/,
                use: ['url-loader', 'file-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        isDevelopment && new ReactRefreshPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ].filter(Boolean),

    resolve: {
        extensions: ['.js', '.jsx'],
    }

}
// module.exports = {
//     mode: 'development',

//     entry: {
//         bundle: path.resolve(__dirname, 'src/index.js'),
//     },

//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name][contenthash].js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ],
//             },
//             {
//                 test: /\.(js|jsx)$/,
//                 use: ['file-loader']
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'Webpack App',
//             filename: 'index.html',
//             template: '/public/index.html',
//         })
//     ]

// };