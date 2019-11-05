const gulp = require('gulp'),
      fs = require('fs'),
      pug = require('gulp-pug'),
      postCSS = require('gulp-postcss'),
      cssNext = require('postcss-cssnext'),
      cssnano = require('cssnano'),
      cssImport = require('postcss-import'),
      browserSync = require('browser-sync').create(),
      webpack = require('webpack-stream'),
      webpackConfig = require('./webpack.config');

const path = {
    src: {
        pug: "./src/views/*.pug",
        css: "./src/css/*.css",
        js: "./src/js/*.js",
    },
    output: {
        pug: "./build/",
        css: "./build/css/",
        js: "./build/js/",
    },
    watch: {
        pug: "./src/views/**/*.pug",
        css: "./src/css/**/*.css",
        js: "./src/js/**/*.js",
    }
}

gulp.task('pug', () => 
    gulp.src(path.src.pug)
        .pipe(pug({
            pretty: true,
            locals: JSON.parse(fs.readFileSync('./content.json', 'utf-8'))
        }))
        .pipe(gulp.dest(path.output.pug))
        .pipe(browserSync.stream())
);

gulp.task('css', () =>
    gulp.src(path.src.css)
        .pipe(postCSS([
            cssImport({root: './src/css/*.css'}),
            cssNext(),
            cssnano()
        ]))
        .pipe(gulp.dest(path.output.css))
        .pipe(browserSync.stream())
);

gulp.task('js', () => 
    gulp.src(path.src.js)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(path.output.js))
        .pipe(browserSync.stream())
);

gulp.task('serve', () => {
    browserSync.init({
        server: './build/'
    });
    gulp.watch(path.watch.pug, gulp.parallel('pug'));
    gulp.watch(path.watch.css, gulp.parallel('css'));
    gulp.watch(path.watch.js, gulp.parallel('js'));
});

gulp.task('default', gulp.series(gulp.parallel('pug', 'css', 'js'), gulp.parallel('serve')));