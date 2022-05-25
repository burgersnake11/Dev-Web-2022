const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  devServer: {
    https: {
      key : fs.readFileSync('../cert/key.pem'),
      cert : fs.readFileSync('../cert/cert.pem')
    }
  }
})
