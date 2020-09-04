Promise = require('synchronous-promise')

const postcss = require('postcss')
const autoprefixer = require('autoprefixer')

export default {
  process: (css, processOptions, pluginOptions) => {
    let returnObject = null

    postcss([autoprefixer(pluginOptions)])
      .process(css, processOptions)
      .then(result => {
        var warns  = result.warnings().map(function (i) {
          delete i.plugin
          return i.toString()
        })

        var map = result.map ? result.map.toString() : null
        returnObject = { css: result.css, map: map, warnings: warns }
      })

    return returnObject
  }
}
