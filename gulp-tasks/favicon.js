const gulp = require('gulp'),
      path = require('path'),
      browserSync = require('browser-sync').create(),
      realFavicon = require ('gulp-real-favicon'),
      fs = require('fs'),
      {paths} = require('../gulpfile');

const FAVICON_DATA_FILE = 'faviconData.json';

gulp.task('favicon', function(done) {
    const blanks = fs.readdirSync(paths.src.favicon);
    if (blanks.length < 1) {
        return done();
    }
    const filename = blanks[0];
	realFavicon.generateFavicon({
		masterPicture: path.join(paths.src.favicon, filename),
		dest: paths.build,
		iconsPath: '/',
		design: {
			ios: {
				pictureAspect: 'backgroundAndMargin',
				backgroundColor: '#ffffff',
				margin: '14%',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: true,
					precomposedIcons: true,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#da532c',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#ffffff',
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'silhouette',
				themeColor: '#5bbad5'
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false,
			readmeFile: false,
			usePathAsIs: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function() {
        browserSync.reload();
        return done();
	});
});


gulp.task('faviconInjection', (done) => {
    if (!fs.existsSync(FAVICON_DATA_FILE)) return done();
    return gulp.src(`./${paths.build}/*.html`)
               .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
               .pipe(gulp.dest(paths.build))
})