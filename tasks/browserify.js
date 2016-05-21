'use strict';

const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    notify = require('gulp-notify');

var errorHandler = function(error) {
    var line = error.message.match(/(\d+:\d+)/),
        file = error.message.match(/(js\/[^\s]+)\s/i);
    notify({
        title: 'JavaScript error in line ' + line[1] + ' of ' + file[1],
        message: error.message
    }).write(error);
    this.emit('end');
}

gulp.task('browserify', function() {
    return browserify('js/index.js')
        .transform('babelify', { presets: ['es2015'] })
        .bundle()
        .on('error', errorHandler)
        .pipe(source('app.js'))
        .pipe(gulp.dest('build/js'));
});
