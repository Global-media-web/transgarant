const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      imagemin = require('gulp-imagemin'),
      mozjpeg = require('imagemin-mozjpeg'),
      {paths} = require('../gulpfile');

gulp.task('image', () =>
    gulp.src(paths.src.img)
        .pipe(imagemin([
            mozjpeg({progressive: true, quality: 75})
        ]))
        .pipe(gulp.dest(paths.output.img))
        .pipe(browserSync.stream())
);