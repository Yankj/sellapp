const utils = require('./utils')
const config = require('../config')
var px2rem = require('postcss-plugin-px2rem')
const isProduction = process.env.NODE_ENV === 'production'
const px2remOpts = {
  rootValue: 40,
  propBlackList:['border']
}

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: function () {
    return [px2rem(px2remOpts)];
  }
}
