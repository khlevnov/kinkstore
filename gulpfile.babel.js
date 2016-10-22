'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/develop');

gulp.task('watch', function() {
	gulp.watch('./frontend/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('./frontend/html/**/*.html', gulp.series('html'));
	gulp.watch('./frontend/pages/**/*.twig', gulp.series('twig'));
	gulp.watch('./frontend/assets/svg/**/*.svg', gulp.series('icons'));
});

gulp.task(
    'build',
    gulp.series(
        'twig',
        'html',
        gulp.parallel(
            'icons',
            'sass',
            'assets',
        )
    )
);

gulp.task('default',
	gulp.series('build', gulp.parallel('watch', 'serve'))
);
