const {series, parallel} = require('gulp'),
      requireDir = require('require-dir');

exports.paths = {
    src: {
        pug: "./src/views/*.pug",
        css: "./src/css/*.?(p|post)css",
        js: "./src/js/*.js",
        img: "./src/img/**/*.*",
        font: "./src/fonts/**/*.*",
        favicon: "./src/favicon/",
        zip: "./build/**/*",
    },
    output: {
        pug: "./build/",
        css: "./build/css/",
        js: "./build/js/",
        img: "./build/img/",
        font: "./build/fonts/",
        favicon: "./build/",
        zip: "./",
    },
    watch: {
        pug: "./src/views/**/*.pug",
        css: "./src/css/**/*.?(p|post)css",
        js: "./src/js/**/*.js",
        img: "./src/img/**/*.*",
        font: "./src/fonts/**/*.*",
        favicon: "./src/favicon/*.*",
    },
    build: "./build/"
}

requireDir('./gulp-tasks');

exports.default = series('clean', 
    parallel('pug', 'css', 'js', 'image', 'fonts', 
        series('favicon', 'faviconInjection')
    ), 
    parallel('serve')
);

exports.build = series('clean', 'pug', 'css', 'js', 'image',
'imgToWebp', 'fonts', 'favicon', 'faviconInjection', 'zip');