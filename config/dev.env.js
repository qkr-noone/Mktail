'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://www.mktail.cn:8483"', // 线上 http://192.168.1.100:8083
  U3D_IP: '"http://192.168.1.100:9004/qnnc2c"',
  URL_IP: '"http://192.168.1.100:8083"'
})
