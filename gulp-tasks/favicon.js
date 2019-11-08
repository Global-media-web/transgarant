const gulp = require('gulp'),
      path = require('path'),
      browserSync = require('browser-sync').create(),
      favicon = require('gulp-favicons'),
      inject = require('gulp-inject'),
      yargs = require('yargs'),
      fs = require('fs'),
      {paths} = require('../gulpfile');

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
    gulp.src([`./${paths.build}/*.html`, `!./${paths.build/OUTPUT_FILENAME}`])
        .pipe(
            inject(
                gulp.src(path.join(paths.build, OUTPUT_FILENAME), {allowEmpty: true}),
                {
                    starttag: '<head>', 
                    endtag: '<',
                    transform: (_, file) => file.contents.toString('utf8')
                }
            )
        )
        .pipe(gulp.dest(paths.build)
    )
    .on('end', () => {
        if (yargs.argv.mode === 'production') {
            try {
                fs.unlinkSync(path.join(paths.build, OUTPUT_FILENAME));
            } catch (e) {
                if(e.code === 'ENOENT') return;
            }
        }
    })
)