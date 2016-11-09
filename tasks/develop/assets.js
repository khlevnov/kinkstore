'use strict';

const gulp = require('gulp');

gulp.task('assets', function() {
	return gulp.src([
        './frontend/assets/**/*.*',
        '!./frontend/assets/**/*.svg'
    ]).pipe(gulp.dest('./build'));
});
