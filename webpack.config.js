var path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader', // Takes CSS data(from imports) and adds them to the HTML document
                    'css-loader'    // Knows how to process CSS imports - takes the imported CSS and loads the file contents
                ],
            },
        ]
    }
}