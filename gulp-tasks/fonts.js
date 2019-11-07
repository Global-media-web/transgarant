const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      {paths} = require('../gulpfile');

gulp.task('fonts', () =>
    gulp.src(paths.src.font)
        .pipe(gulp.dest(paths.output.font))
        .pipe(browserSync.stream())
);