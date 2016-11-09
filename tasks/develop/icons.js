'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

gulp.task('icons', () => {
    return gulp.src('./frontend/assets/svg/**.svg')
        .pipe(svgmin({
            plugins: [{ removeTitle: true }]
        }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(rename('icons.svg'))
        .pipe(gulp.dest('./build/images'));
});
