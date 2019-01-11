const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const eyeglass = require('eyeglass')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const inlineSvg = require('postcss-inline-svg')
const autoprefixer = require('autoprefixer')
const svgSprite = require('gulp-svg-sprite')
const rename = require('gulp-rename')
const generateSvgIcons = require('./build/icons')
const sourcemaps = require('gulp-sourcemaps')

const SASS_FILES = 'sass/**/*.scss'
function sass () {
  return gulp.src(SASS_FILES)
    .pipe(sourcemaps.init())
    .pipe(gulpSass(eyeglass()).on('error', gulpSass.logError))
    .pipe(postcss([
      inlineSvg(),
      autoprefixer(),
      cssnano()
    ]))
    .pipe(sourcemaps.write('.', {
      sourceRoot: '/sass'
    }))
    .pipe(gulp.dest('static/css/'))
}

const ICONS_FILE = 'icons.txt'
function icons () {
  return gulp.src(ICONS_FILE)
    .pipe(generateSvgIcons())
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
}

function watch () {
  gulp.watch(SASS_FILES, { ignoreInitial: false }, sass)
  gulp.watch(ICONS_FILE, { ignoreInitial: false }, icons)
}

exports.default = gulp.parallel(sass, icons)
exports.sass = sass
exports.icons = icons
exports.watch = watch
