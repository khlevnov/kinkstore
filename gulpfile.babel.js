'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/develop');

gulp.task('watch', function() {
	gulp.watch('sass/**/*.*', gulp.series('sass'));
	gulp.watch('html/*.*', gulp.series('html', 'svgstore'));
	gulp.watch('assets/svg/**/*.svg', gulp.series('symbols'));
});

gulp.task(
    'build',
    gulp.series(
        'html',
        gulp.parallel(
            'symbols',
            // 'sass',
            'assets',
        )
    )
);

gulp.task('default',
	gulp.series('build', gulp.parallel('watch', 'serve'))
);
