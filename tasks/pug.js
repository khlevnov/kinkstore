'use strict';

const gulp = require('gulp'),
    notify = require('gulp-notify'),
    pug = require('gulp-pug');

gulp.task('pug', function() {
	return gulp.src('pug/**/*.pug')
        .pipe(pug({
            pretty: '    ',
        }))
        .on('error', notify.onError())
		.pipe(gulp.dest('build'));
});
