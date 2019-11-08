const gulp = require('gulp'),
      zip = require('gulp-zip'),
      {paths} = require('../gulpfile');

gulp.task('zip', () =>
    gulp.src(paths.src.zip)
        .pipe(zip('build.zip'))
        .pipe(gulp.dest(paths.output.zip))
)