'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('serve', function() {
	browserSync.init({
        server: {
            baseDir: './build'
        }
	});
	gulp.watch('./build/*.html')
        .on('change', browserSync.reload);
});
