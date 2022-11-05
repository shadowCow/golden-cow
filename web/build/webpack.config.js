const path = require('path')

const config = {
    mode: 'development',
    context: path.resolve(__dirname, '..'),
    entry: './src/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '..', 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '..', 'public'),
            publicPath: '/',
        },
        compress: true,
        port: 9191,
    },
}

module.exports = config
