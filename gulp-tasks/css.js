const gulp = require('gulp'),
      postCSS = require('gulp-postcss'),
      postCSSPresetEnv = require('postcss-preset-env'),
      cssnano = require('cssnano'),
      cssImport = require('postcss-import'),
      postCSSNested = require('postcss-nested'),
      browserSync = require('browser-sync'),
      yargs = require('yargs'),
      gulpIf = require('gulp-if'),
      rename = require('gulp-rename'),
      {paths} = require('../gulpfile');
    

const plugins = [
    cssImport({root: paths.src.css}),
    postCSSPresetEnv({ stage: 0 }),
    postCSSNested(),
];

const isProductionMode = yargs.argv.mode === 'production';

if(isProductionMode) {
    plugins.push(cssnano())
}

gulp.task('css', () =>
    gulp.src(paths.src.css)
        .pipe(postCSS(plugins))
        .pipe(rename({extname: '.css'}))
        .pipe(gulpIf(isProductionMode, rename({suffix: '.min'})))
        .pipe(gulp.dest(paths.output.css))
        .pipe(browserSync.stream())
);