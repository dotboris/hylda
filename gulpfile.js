const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const svgSprite = require('gulp-svg-sprite')
const rename = require('gulp-rename')
const icons = require('./build/icons')
const sourcemaps = require('gulp-sourcemaps')

const SASS_FILES = 'sass/**/*.scss'

gulp.task('sass', () =>
  gulp.src(SASS_FILES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(sourcemaps.write('.', {
      sourceRoot: '/sass'
    }))
    .pipe(gulp.dest('static/css/'))
)

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

gulp.task('watch', ['default'], () => {
  gulp.watch('icons.txt', ['icons'])
  gulp.watch(SASS_FILES, ['sass'])
})
