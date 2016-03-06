var gulp = require('gulp');
var gls = require('gulp-live-server'); //running live server
var sass = require('gulp-sass'); //compiling sass
var concat = require('gulp-concat'); //concat js files
var sourcemaps = require('gulp-sourcemaps'); //creating sourcemaps for easy debugging


/* 
 * Task for compiling sass (.scss) files 
 */
gulp.task('sass', function () {
 return gulp.src('public/css/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('public/dist/css'));
});


/* 
 * Task for compiling .js files 
 */
gulp.task('js', function() {
  return gulp.src(['public/js/plugins/*.js', 
                   'public/js/controllers/*.js', 
                   'public/js/directives/*.js', 
                   'public/js/services/*.js', 
                   'public/js/filters/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
   .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('public/dist/js'));
});


/* 
 * Starting server 
 */
gulp.task('start', function() {
    var server = gls.new('server.js');
    server.start(); //start server
    
    
    //compile sass files when changed
    gulp.watch('public/css/sass/**/*.scss', ['sass']);
    
    //compile js files when changed
    gulp.watch('public/js/**/*.js', ['js']);
    
    /* use for live reloading */
    gulp.watch(['public/dist/css/app.css', 'public/**/*.html', 'public/dist/js/app.js'], function (file) {
      server.notify.apply(server, [file]);
    });
});