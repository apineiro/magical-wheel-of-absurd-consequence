module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/tibetan/wheelofsuffering/dist/'
    : '/',
  configureWebpack: {
    devtool: 'eval-source-map'
  }
}