const through2 = require('through2')
const Vinyl = require('vinyl')
const fa = require('font-awesome-assets')

module.exports = function () {
  return through2.obj(function (chunk, enc, cb) {
    const icons = chunk.contents
      .toString()
      .split('\n')
      .map(i => i.trim())
      .filter(i => i.length !== 0)

    icons.forEach(icon => {
      const svg = fa.svg(icon, '#000')
      this.push(new Vinyl({
        cwd: '/',
        base: '/phony',
        path: `/phony/${icon}.svg`,
        contents: Buffer.from(svg)
      }))
    })

    cb(null)
  })
}
