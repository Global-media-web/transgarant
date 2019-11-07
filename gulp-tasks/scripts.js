const gulp = require('gulp'),
      webpack = require('webpack-stream'),
      webpackConfig = require('../webpack.config'),
      browserSync = require('browser-sync'),
      {paths} = require('../gulpfile');

gulp.task('js', () => 
    gulp.src(paths.src.js)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.output.js))
        .pipe(browserSync.stream())
);