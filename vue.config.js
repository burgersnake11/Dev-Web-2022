const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    express: {
      shouldServeApp: false,
      serverDir: 'n'
    }
  }
})
