const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');


gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/css'))
	
})

gulp.task('imagemin',()=>
    	gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
);
 
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['sass']),
	gulp.watch('./src/images/*',['imagemin'])
})