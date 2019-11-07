const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      favicon = require('gulp-favicons'),
      {paths} = require('../gulpfile');

gulp.task('favicon', () =>
    gulp.src(paths.src.favicon)
        .pipe(favicon({
            icons: {
                android: false,
                appleStartup: false,
                coast: false,
                firefox: false,
                windows: false,
                yandex: false
            }
        }))
        .pipe(gulp.dest(paths.output.favicon))
        .pipe(browserSync.stream())
);