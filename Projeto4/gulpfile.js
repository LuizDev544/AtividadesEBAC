const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const gifsicle = require('imagemin-gifsicle');
const mozjpeg = require('imagemin-mozjpeg').default;
const pngquant = require('imagemin-pngquant').default;
const svgo = require('imagemin-svgo').default;
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*', {
            encoding: false
        })
        .pipe(imagemin([
            gifsicle({
                interlaced: true
            }),
            mozjpeg({
                quality: 75,
                progressive: true
            }),
            pngquant({
                quality: [0.6, 0.8]
            }),
            svgo()
        ]))
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}