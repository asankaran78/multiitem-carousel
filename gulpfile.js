var gulp = require('gulp');
var babel = require('gulp-babel');
var react = require('gulp-react')

gulp.task("babel", function(){
    return gulp.src("src/*.jsx").
    pipe(babel())
    .pipe(gulp.dest("src/js/"));
});