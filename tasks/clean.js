'use strict';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function() {
	return del([
		'./build/*.html',
		'./build/styles/*',
		'./build/fonts/*'
	]);
});
