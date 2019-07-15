'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
<<<<<<< HEAD
  NODE_ENV: '"testing"',
  BASE_API: '"http://192.168.1.100:8083"',
  U3D_IP: '"http://192.168.1.100:9004/qnnc2c"',
  URL_IP: '"http://192.168.1.100:8083"'
=======
  NODE_ENV: '"testing"'
>>>>>>> remotes/origin/master
})
