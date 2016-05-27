'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tasks');

gulp.task('watch', function() {
	gulp.watch('sass/**/*.*', gulp.series('sass'));
	gulp.watch('pug/**/*.*', gulp.series('pug', 'svgstore'));
	gulp.watch('js/**/*.*', gulp.series('browserify'));
	gulp.watch('assets/svg/**/*.svg', gulp.series('svgstore'));
});

gulp.task('build',
    gulp.series('pug', gulp.parallel('svgstore', 'sass', 'assets', 'browserify'))
);

gulp.task('default',
	gulp.series('build', gulp.parallel('watch', 'sync'))
);
