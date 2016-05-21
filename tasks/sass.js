'use strict';

const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    combiner = require('stream-combiner2').obj,
    mergeMediaQueries = require('gulp-merge-media-queries'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    requireDir = require('require-dir'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
	return combiner(
		gulp.src('sass/index.scss'),
		sourcemaps.init(),
		sass({
			includePaths: [
				require('node-normalize-scss').includePaths,
				'./node_modules/breakpoint-sass/stylesheets',
				'./node_modules/susy/sass',
				'./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss',
			]
		}),
		rename('styles.css'),
	//	mergeMediaQueries(),
	//	autoprefixer({browsers: ['last 5 versions']}),
	//	cleanCSS(),
		sourcemaps.write('.'),
		gulp.dest('build/styles')
	).on('error', notify.onError(function(error) {
		var line = error.message.match(/on line \d+/m) + ' of file ' + error.message.match(/[-._a-z\/\\]+\n/i);
		var message = error.message.match(/Error: .+\n/);
		return {
			title: 'Sass error ' + line,
			message: message
		}
	}));
});
