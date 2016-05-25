'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tasks');

gulp.task('watch', function() {
	gulp.watch('sass/**/*.*', gulp.series('sass'));
	gulp.watch('html/*.*', gulp.series('html'));
	gulp.watch('js/**/*.*', gulp.series('browserify'));
	gulp.watch('assets/svg/**/*.svg', gulp.series('svgstore'));
});

gulp.task('build',
	gulp.parallel('html', 'sass', 'assets', 'browserify', 'svgstore')
);

gulp.task('default',
	gulp.series('build', gulp.parallel('watch', 'sync'))
);
