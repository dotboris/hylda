const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const stylelint = require('gulp-stylelint')
const filter = require('gulp-filter')

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
  gulp.src('node_modules/open-iconic/svg/*.svg')
    .pipe(filter(filterIcons))
    .pipe(gulp.dest('layouts/partials/icons/'))
)

gulp.task('default', ['sass', 'icons'])

gulp.task('watch', ['default', 'lint'], () => {
  watching = true
  gulp.watch(SASS_FILES, ['sass', 'lint:sass'])
})
