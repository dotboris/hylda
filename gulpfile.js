const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const stylelint = require('gulp-stylelint')
const svgSprite = require('gulp-svg-sprite')
const filter = require('gulp-filter')
const rename = require('gulp-rename')
const icons = require('./build/icons.js')

const SASS_FILES = 'sass/**/*.scss'

let watching = false

gulp.task('lint:sass', () =>
  gulp.src(SASS_FILES)
    .pipe(stylelint({
      failOnError: !watching,
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
)

gulp.task('lint', ['lint:sass'])

gulp.task('sass', () =>
  gulp.src(SASS_FILES)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('static/css/'))
)

const ICONS = ['menu', 'chevron-right', 'chevron-left']
  .map(i => `${i}.svg`)
function filterIcons (file) {
  return ICONS.indexOf(file.relative) !== -1
}

gulp.task('icons', () =>
  gulp.src('icons.txt')
    .pipe(icons())
    .pipe(svgSprite({
      mode: { inline: true, symbol: true },
      shape: {
        id: {
          generator: 'icon-%s'
        }
      },
      svg: {
        xmlDeclaration: false
      }
    }))
    .pipe(rename('icons-bundle.svg'))
    .pipe(gulp.dest('layouts/partials/'))
)

gulp.task('default', ['sass', 'icons'])

gulp.task('watch', ['default', 'lint'], () => {
  watching = true
  gulp.watch('icons.txt', ['icons'])
  gulp.watch(SASS_FILES, ['sass', 'lint:sass'])
})
