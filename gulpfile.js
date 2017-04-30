const gulp = require('gulp');
const sass = require('gulp-sass');

const SASS_FILES = 'sass/**/*.scss'

gulp.task('sass', () =>
  gulp.src(SASS_FILES)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('static/css/'))
)

gulp.task('default', ['sass'])

gulp.task('watch', ['sass'], () => {
  gulp.watch(SASS_FILES, ['sass'])
})
