const gulp = require('gulp'),
      fs = require('fs'),
      path = require('path'),
      {paths} = require('../gulpfile');

gulp.task('clean', (done) => {
    const removeDir = (dirPath) => {
        if(!fs.existsSync(dirPath)) return;
        const list = fs.readdirSync(dirPath, {withFileTypes: true});
        list.forEach(item => {
            const rightPath = path.join(dirPath, item.name);
            item.isDirectory() ? removeDir(rightPath) : fs.unlinkSync(rightPath);
        })
        fs.rmdirSync(dirPath);
    }
    removeDir(paths.build);
    done();
});