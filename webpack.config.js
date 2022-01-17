module.exports = {
    mode: 'development',
    devServer: {
      host: '0.0.0.0',
      port: '8080',
      publicPath: '/',
      contentBase: './public/',
      watchContentBase: true,
      watchOptions: {
        ignored: /node_modules/,
      },
      // enable HMR
      hot: true,
      hotOnly: true,
    },
    plugins: [
      // Generates an `index.html` file with the <script> injected.
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
      }),
    ],
    disableHostCheck: true
    ,devServer: {
        hot: true
      },
      target: 'web',
      mode: 'development',
    output: {
      filename: 'main.js',
    },
    module: {
      rules: [
          
          {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
          {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader"
          }
      },
     
        {
          test: /\.css$/i,
          use: [ "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true // true outputs JSX tags
              }
            }
          ]
        },
        
        
        
  ],
      
  },
  };
  
  