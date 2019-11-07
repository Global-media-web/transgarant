const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      imagemin = require('gulp-imagemin'),
      webp = require('imagemin-webp'),
      rename = require('gulp-rename'),
      {paths} = require('../gulpfile');

gulp.task('imgToWebp', () =>
    gulp.src(paths.src.img)
        .pipe(imagemin([webp()]))
        .pipe(rename({extname: '.webp'}))
        .pipe(gulp.dest(paths.output.img))
        .pipe(browserSync.stream())
);