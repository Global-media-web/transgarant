const gulp = require('gulp'),
      fs = require('fs'),
      pug = require('gulp-pug');

const path = {
    src: {
        pug: "./src/views/*.pug",
    },
    output: {
        pug: "./build/",
    },
    watch: {
        pug: "./src/views/**.*.pug",
    }
}

gulp.task('pug', () => 
    gulp.src(path.src.pug)
        .pipe(pug({
            pretty: true,
            locals: JSON.parse(fs.readFileSync('./content.json', 'utf-8'))
        }))
        .pipe(gulp.dest(path.output.pug))
)