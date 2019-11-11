const gulp = require('gulp'),
      fs = require('fs');

gulp.task('createFileStructure', (done) => {
    mkDirIfNotExist('src');
    mkDirIfNotExist('src/css');
    mkDirIfNotExist('src/favicon');
    mkDirIfNotExist('src/img');
    mkDirIfNotExist('src/js');
    mkDirIfNotExist('src/views');
    mkDirIfNotExist('src/fonts');
    fs.writeFileSync('src/views/content.json', '{}');
    fs.writeFileSync('src/js/index.js', '');
    done();
})

const mkDirIfNotExist = (dirname) => {
    try {
        fs.mkdirSync(dirname);
    } catch(e) {
        if(e.code === 'EEXIST') console.log(e.path, 'already exists');
    }
}