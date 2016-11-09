'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const csso = require('gulp-csso');
const mqpacker = require('css-mqpacker');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('sass', function() {
    return gulp.src('./frontend/sass/styles.scss')
        .pipe(sass())
        .on('error', function(error) {
            console.log(error.message);
            this.emit('end');
        })
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 4 versions']
            }),
            mqpacker({
                sort: true
            })
        ]))
        .pipe(csso())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
});
