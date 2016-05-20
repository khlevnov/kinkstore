'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tasks');

gulp.task('watch', function() {
	gulp.watch('sass/**/*.*', gulp.series('sass'));
	gulp.watch('html/*.*', gulp.series('html'));
	gulp.watch('js/*.*', gulp.series('browserify'));
});

gulp.task('build',
	gulp.parallel('html', 'sass', 'assets', 'browserify')
);

gulp.task('default',
	gulp.series('clean', 'build', gulp.parallel('watch', 'sync'))
);
