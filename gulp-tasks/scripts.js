const gulp = require('gulp'),
      webpack = require('webpack-stream'),
      browserSync = require('browser-sync'),
      yargs = require('yargs'),
      webpackConfig = require('../webpack.config'),
      {paths} = require('../gulpfile');

const config = {
    development: {
        mode: 'development',
        devtool: 'source-map',
    },
    production: {
        mode: 'production',
        output: { filename: '[name].min.js' }
    },
}
const mode = yargs.argv.mode || 'development';
Object.assign(webpackConfig, config[mode]);

gulp.task('js', () => 
    gulp.src(paths.src.js)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.output.js))
        .pipe(browserSync.stream())
);