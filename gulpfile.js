const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const stylelint = require('gulp-stylelint')

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

gulp.task('icons', () =>
  gulp.src('node_modules/open-iconic/svg/menu.svg')
    .pipe(gulp.dest('layouts/partials/icons/'))
)

gulp.task('default', ['sass', 'icons'])

gulp.task('watch', ['sass', 'lint'], () => {
  watching = true
  gulp.watch(SASS_FILES, ['sass', 'lint:sass'])
})
