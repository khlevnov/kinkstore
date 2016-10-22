'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';

gulp.task('icons', () => {
    return gulp.src('./frontend/assets/svg/**.svg')
        .pipe(svgmin({
            plugins: [{ removeTitle: true }]
        }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(rename('icons.svg'))
        .pipe(gulp.dest('./build/images'));
});
