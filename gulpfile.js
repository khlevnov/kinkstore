'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tasks');

gulp.task('watch', function() {
	gulp.watch('sass/**/*.*', gulp.series('sass'));
	gulp.watch('html/*.*', gulp.series('html', 'svgstore'));
	gulp.watch('js/**/*.*', gulp.series('browserify'));
	gulp.watch('assets/svg/**/*.svg', gulp.series('svgstore'));
});

gulp.task('build',
    gulp.series('html', gulp.parallel('svgstore', 'sass', 'assets', 'browserify'))
);

gulp.task('default',
	gulp.series('build', gulp.parallel('watch', 'sync'))
);
