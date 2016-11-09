'use strict';

const gulp = require('gulp');
const changed = require('gulp-changed');

gulp.task('html', function() {
    return gulp.src('./frontend/html/*.html')
        .pipe(changed('./build'))
        .pipe(gulp.dest('./build'));
});
