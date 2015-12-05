var gulp = require('gulp');
var bs = require('browser-sync').create();
var deploy = require('gulp-gh-pages');

// Push build to gh-pages branch
gulp.task('deploy', function() {
   return gulp.src("./public/**/*")
    .pipe(deploy());
});

gulp.task('serve', function() {
    bs.init({
        server: {
            baseDir: "./public/"
        },
        files: 'public/**/*.*'
    });
});

gulp.task('default', ['serve']);