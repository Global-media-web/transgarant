const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      {paths} = require('../gulpfile');

gulp.task('serve', () => {
    browserSync.init({
        server: './build/'
    });
    gulp.watch(paths.watch.pug, gulp.series('pug', 'faviconInjection'));
    gulp.watch(paths.watch.css, gulp.parallel('css'));
    gulp.watch(paths.watch.js, gulp.parallel('js'));
    gulp.watch(paths.watch.img, gulp.parallel('image'));
    gulp.watch(paths.watch.img, gulp.parallel('imgToWebp'));
    gulp.watch(paths.watch.font, gulp.parallel('fonts'));
});