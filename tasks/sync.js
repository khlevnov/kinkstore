'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('sync', function() {
	browserSync.init({
		host: 'build.kink3.localhost',
		open: 'external',
		proxy: 'build.kink3.localhost',
		notify: false
	});
	browserSync.watch([
		'html/**',
		'build/styles/styles.css',
	]).on('change', browserSync.reload);
});
