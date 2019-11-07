const gulp = require('gulp'),
      requireDir = require('require-dir');

exports.paths = {
    src: {
        pug: "./src/views/*.pug",
        css: "./src/css/*.css",
        js: "./src/js/*.js",
        img: "./src/img/**/*.*",
        font: "./src/fonts/**/*.*",
        favicon: "./src/img/favicon/*.*",
    },
    output: {
        pug: "./build/",
        css: "./build/css/",
        js: "./build/js/",
        img: "./build/img/",
        font: "./build/fonts/",
        favicon: "./build/img/favicon/",
    },
    watch: {
        pug: "./src/views/**/*.pug",
        css: "./src/css/**/*.css",
        js: "./src/js/**/*.js",
        img: "./src/img/**/*.*",
        font: "./src/fonts/**/*.*",
        favicon: "./src/img/favicon/*.*",
    },
    build: "./build/"
}

requireDir('./gulp-tasks');

gulp.task(
    'default', 
    gulp.series(
        'clean', 
        gulp.parallel('pug', 'css', 'js', 'image', 'imgToWebp', 'fonts', 'favicon'), 
        gulp.parallel('serve')
    )
);