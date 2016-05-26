const gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject');

gulp.task('svgstore', function () {
    var svgs = gulp
        .src('assets/svg/*.svg')
        .pipe(svgmin())
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgstore({ inlineSvg: true }));

        function fileContents (filePath, file) {
            return file.contents.toString();
        }

        return gulp
            .src('build/index.html')
            .pipe(inject(svgs, { transform: fileContents }))
            .pipe(gulp.dest('build'));
});
