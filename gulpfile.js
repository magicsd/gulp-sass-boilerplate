const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');

const sourcePath = ['scss/**/*.scss'];
const distPath = 'public/css';

gulp.task('sass', () => gulp.src(sourcePath)
                            .pipe(plumber())
                            .pipe(sass())
                            .pipe(gulp.dest(distPath)));

gulp.task('watch', () => gulp.watch(sourcePath, ['sass']));

gulp.task('build', ['sass']);

gulp.task('default', ['build', 'watch']);
