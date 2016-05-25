'use strict';

const gulp = require('gulp');

gulp.task('assets', function() {
	return gulp.src([
        'assets/**',
        '!assets/svg'
    ]).pipe(gulp.dest('build'));
});
