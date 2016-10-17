'use strict';

import gulp from 'gulp';

gulp.task('assets', function() {
	return gulp.src([
        './frontend/assets/**/*.*',
        '!./frontend/assets/**/*.svg'
    ]).pipe(gulp.dest('./build'));
});
