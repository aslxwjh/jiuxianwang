const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');


gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')	
	.pipe(sass())
	.pipe(concat("index.min.css"))
	.pipe(cssnano())
	.pipe(gulp.dest('./dist/css'))
	
})

gulp.task('imagemin',()=>
    	gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
);
 
gulp.task('js',function(){
	gulp.src('./modulejs/js/*.js').pipe(babel({
		'presets' : ['@babel/env']
	})).pipe(concat("index.min.js")).pipe(uglify()).pipe(gulp.dest('./src/gulpjs'));
})
 
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['sass']),
	gulp.watch('./src/images/*',['imagemin']),
	gulp.watch('./modulejs/js/*.js',['js'])
})