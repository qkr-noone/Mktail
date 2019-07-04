'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"//192.168.1.199:8083"', // 线上 https://www.mktail.cn:8483
  U3D_IP: '"http://192.168.1.100:9004/qnnc2c"',
  BASE_AFTER: '"http://192.168.1.100:9002"' // 后台系统
})
