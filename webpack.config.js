const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        app: path.join(__dirname, 'app.ts'),
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                resourceQuery: /blockType=i18n/,
                type: 'javascript/auto',
                loader: '@intlify/vue-i18n-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.ts']
    },
    plugins: [
        // exclude locale files in moment
        new VueLoaderPlugin()
    ]
};
