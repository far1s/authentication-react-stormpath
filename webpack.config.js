module.exports = {
  entry: [
    './src/app'
  ],
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
