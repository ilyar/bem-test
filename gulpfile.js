var gulp = require('gulp'),
	bem = require('gulp-bem'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload');

var levels = ['blocks'];
var tree = bem(levels);


gulp.task('default', function () {
	tree.deps('blocks/page')
	.pipe(bem.src('{bem}.css'))
	.pipe(concat('index.css'))
	.pipe(gulp.dest('./dist'));
});