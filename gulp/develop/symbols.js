'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';

gulp.task('symbols', () => {
    return gulp.src('./frontend/assets/svg/**.svg')
        .pipe(svgmin({
            plugins: [{ removeTitle: true }]
        }))
        .pipe(rename({ prefix: 'icon-' }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(rename('symbols.svg'))
        .pipe(gulp.dest('./build/images'));
});
