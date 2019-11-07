const gulp = require('gulp'),
      pug = require('gulp-pug'),
      browserSync = require('browser-sync'),
      fs = require('fs'),
      {paths} = require('../gulpfile');

gulp.task('pug', () => 
    gulp.src(paths.src.pug)
        .pipe(pug({
            pretty: true,
            locals: JSON.parse(fs.readFileSync('./content.json', 'utf-8'))
        }))
        .pipe(gulp.dest(paths.output.pug))
        .pipe(browserSync.stream())
);