'use strict';

import gulp from 'gulp';

gulp.task('html', function() {
    return gulp.src('./frontend/html/*.html')
        .pipe(gulp.dest('./build'));
});
