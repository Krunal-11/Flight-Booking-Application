const path = require('path');

module.exports = {
    mode: 'development', // or 'production' if you're building for production
    entry: './src/index.js', // your entry point file
    output: {
        filename: 'bundle.js', // output bundle file name
        path: path.resolve(__dirname, 'dist'), // output directory
    },
    resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/"),
            "url": require.resolve("url/"),
            "assert": require.resolve("assert/")
        }
    }
};
