const gulp = require('gulp'),
      requireDir = require('require-dir');

exports.paths = {
    src: {
        pug: "./src/views/*.pug",
        css: "./src/css/*.css",
        js: "./src/js/*.js",
        img: "./src/img/**/*.*",
        font: "./src/fonts/**/*.*",
        favicon: "./src/favicon/*.*",
    },
    output: {
        pug: "./build/",
        css: "./build/css/",
        js: "./build/js/",
        img: "./build/img/",
        font: "./build/fonts/",
        favicon: "./build/",
    },
    watch: {
        pug: "./src/views/**/*.pug",
        css: "./src/css/**/*.css",
        js: "./src/js/**/*.js",
        img: "./src/img/**/*.*",
        font: "./src/fonts/**/*.*",
        favicon: "./src/favicon/*.*",
    },
    build: "./build/"
}

requireDir('./gulp-tasks');

gulp.task(
    'default', 
    gulp.series(
        'clean', 
        gulp.parallel('pug', 'css', 'js', 'image', 'imgToWebp', 'fonts', 
            gulp.series('favicon', 'faviconInjection')
        ), 
        gulp.parallel('serve')
    )
);