'use strict';

import gulp from 'gulp';
import twig from 'gulp-twig';

gulp.task('twig', function() {
    return gulp.src('./frontend/pages/*.twig')
        .pipe(twig())
        .on('error', function(error) {
            console.log(error.message);
            this.emit('end');
        })
        .pipe(gulp.dest('./build'));
});
