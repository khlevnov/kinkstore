'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tasks/develop');

gulp.task('watch', function() {
	gulp.watch('./frontend/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('./frontend/html/**/*.html', gulp.series('html'));
	gulp.watch('./frontend/pages/**/*.pug', gulp.series('pug'));
	gulp.watch('./frontend/assets/svg/**/*.svg', gulp.series('icons'));
});

gulp.task(
    'build',
    gulp.series(
        'pug',
        'html',
        gulp.parallel(
            'icons',
            'sass',
            'assets'
        )
    )
);

gulp.task('default',
	gulp.series('build', gulp.parallel('watch', 'serve'))
);
