const path = require('path'),
      glob = require('glob');

const entry = glob.sync('./src/js/*.js')
                  .reduce((list, file) => 
                    ({...list, [path.basename(file, '.js')]: file}), 
                    {});

module.exports = {
    entry,
    output: {
        filename: '[name].js',
        path: '/build/js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}