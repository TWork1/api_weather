const path = require('path');
const Htmlwebpackplugins = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module:{
        rules: [{
            test: /\.css$/i,
            use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(otf|ttf)$/i,
                type: 'asset/resource'
            }
        ]
      },
      devtool: 'inline-source-map',
      devServer: {
        static: './dist',
      },
      plugins:[
        new Htmlwebpackplugins ({
            title:'Todo List',
            template:'./src/index.html'
        })
      ],
      
    };