const gulp = require('gulp'),
      path = require('path'),
      browserSync = require('browser-sync').create(),
      favicon = require('gulp-favicons'),
      {paths} = require('../gulpfile'),
      inject = require('gulp-inject');

const OUTPUT_FILENAME = 'favicon.html';


gulp.task('favicon', () =>
    gulp.src(paths.src.favicon)
        .pipe(favicon({
            scope: '/',
            path: '/',
            html: OUTPUT_FILENAME,
            pipeHTML: true,
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

gulp.task('faviconInjection', () => 
    gulp.src([path.join(paths.build, '*.html'), `!${path.join(paths.build, OUTPUT_FILENAME)}`])
        .pipe(
            inject(
                gulp.src(path.join(paths.build, OUTPUT_FILENAME)), 
                {
                    starttag: '<head>', 
                    endtag: '<',
                    transform: (_, file) => file.contents.toString('utf8')
                }
            )
        )
        .pipe(gulp.dest(paths.build)
    )
)