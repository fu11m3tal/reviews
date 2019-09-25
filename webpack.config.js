module.exports = {
  entry: __dirname + '/client/src/components/App.jsx',
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
        loader: 'url-loader?limit=100000'
      },
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
    library: 'Reviews'
  }
};


