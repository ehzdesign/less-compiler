
var gulp           = require('gulp'),
    less           = require('gulp-less'),
    sourcemaps     = require('gulp-sourcemaps');
    plumber        = require('gulp-plumber');
    browserSync    = require('browser-sync'),
    reload         = browserSync.reload,
    watch          = require('gulp-watch');

/* Task to compile less */
gulp.task('compile-less', function() {  
  gulp.src('src/less/main.less')
    .pipe(plumber())
    .pipe(less())
    
    .pipe(gulp.dest('dist/less'))
    .pipe(reload({stream: true}));
});
// =======================================
// HTML
// =======================================

gulp.task('html', function(){
  gulp.src('*.html')
      .pipe(reload({stream: true}));

});

// =======================================
// BROWSER-SYNC
// =======================================

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: './'
    }
  });
});



/* Task to watch less changes */
gulp.task('watch', function() {  
  gulp.watch('src/**/*.less' , ['compile-less']);
  gulp.watch('*.html', ['html']);
});



/* Task when running `gulp` from terminal */
gulp.task('default', ['compile-less', 'html', 'browser-sync','watch']);  