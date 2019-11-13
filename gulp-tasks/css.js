const gulp = require('gulp'),
      postCSS = require('gulp-postcss'),
      postCSSPresetEnv = require('postcss-preset-env'),
      cssnano = require('cssnano'),
      cssImport = require('postcss-import'),
      postCSSNested = require('postcss-nested'),
      browserSync = require('browser-sync'),
      yargs = require('yargs'),
      {paths} = require('../gulpfile');
    

const plugins = [
    cssImport({root: paths.src.css}),
    postCSSPresetEnv({ stage: 0 }),
    postCSSNested(),
];

if(yargs.argv.mode === 'production') {
    plugins.push(cssnano())
}

gulp.task('css', () =>
    gulp.src(paths.src.css)
        .pipe(postCSS(plugins))
        .pipe(gulp.dest(paths.output.css))
        .pipe(browserSync.stream())
);