const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      imagemin = require('gulp-imagemin'),
      mozjpeg = require('imagemin-mozjpeg'),
      yargs = require('yargs'),
      gulpIf = require('gulp-if'),
      {paths} = require('../gulpfile');

const isProductionMode = yargs.argv.mode === 'production';

gulp.task('image', () =>
    gulp.src(paths.src.img)
        .pipe(
            gulpIf(isProductionMode, 
                imagemin([mozjpeg({progressive: true, quality: 75})])
            )
        )
        .pipe(gulp.dest(paths.output.img))
        .pipe(browserSync.stream())
);