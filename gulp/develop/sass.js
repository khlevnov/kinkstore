'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import csso from 'gulp-csso';
import mqpacker from 'css-mqpacker';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

gulp.task('sass', function() {
    return gulp.src('./frontend/sass/styles.scss')
        .pipe(sass())
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
