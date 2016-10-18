'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('serve', function() {
	browserSync.init({
        server: {
            baseDir: './build'
        }
	});
	gulp.watch('./build/*.html')
        .on('change', browserSync.reload);
});
