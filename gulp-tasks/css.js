const gulp = require('gulp'),
      postCSS = require('gulp-postcss'),
      cssNext = require('postcss-cssnext'),
      cssnano = require('cssnano'),
      cssImport = require('postcss-import'),
      browserSync = require('browser-sync'),
      {paths} = require('../gulpfile');

gulp.task('css', () =>
    gulp.src(paths.src.css)
        .pipe(postCSS([
            cssImport({root: './src/css/*.css'}),
            cssNext(),
            cssnano()
        ]))
        .pipe(gulp.dest(paths.output.css))
        .pipe(browserSync.stream())
);