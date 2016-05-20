'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('sync', function() {
	browserSync.init({
		host: 'kink3.localhost',
		open: 'external',
		proxy: 'kink3.localhost',
		notify: false
	});
	browserSync.watch([
		'build/*.html',
        'build/js/app.js',
		'build/styles/styles.css',
	]).on('change', browserSync.reload);
});
