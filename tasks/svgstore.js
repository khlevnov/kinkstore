const gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject');

gulp.task('svgstore', function () {
    return gulp
        .src('assets/svg/*.svg')
        .pipe(svgmin())
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgstore())
        .pipe(rename('icons.svg'))
        .pipe(gulp.dest('build/images'));
});
