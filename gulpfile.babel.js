/**
 * Dev 
 * lib for Strs
 * 
 * 
 */


import gulp from 'gulp';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';
import es6ify from 'es6ify';
import deglobalify from 'deglobalify';
import source from 'vinyl-source-stream';


gulp.task('brows', () => {
  browserify({
    entries: './src/strs.js',
    transform: [babelify, es6ify, deglobalify],
    standalone: 'S',
    debug: true
  })
  .bundle()
  .pipe(source('strs.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});



gulp.task('default', ['brows'], () => {});