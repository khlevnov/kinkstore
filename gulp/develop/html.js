'use strict';

import gulp from 'gulp';
import changed from 'gulp-changed';

gulp.task('html', function() {
    return gulp.src('./frontend/html/*.html')
        .pipe(changed('./build'))
        .pipe(gulp.dest('./build'));
});
