'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', function() {
    return gulp.src('./frontend/pages/*.pug')
        .pipe(pug())
        .on('error', function(error) {
            console.log(error.message);
            this.emit('end');
        })
        .pipe(gulp.dest('./build'));
});
