'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify('js/index.js')
        .transform('babelify', { presets: ['es2015'] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('build/js'));
});
