module.exports = {
  mode: 'none',
  output: {
    assetModuleFilename: '[path][name]-[hash].[ext]'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: 'css-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff2?|otf)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
