const { src, dest, parallel, series, watch } = require('gulp');
const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('autoprefixer');
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const browserSync = require('browser-sync').create();

function browsersync(){
  browserSync.init({
    server: { baseDir: 'src/'},
    notify: false,
    online: true,
  })
}

gulp.task("refresh",
  function (done){
    browserSync.reload();
    done()
  }
)

gulp.task(
  "css", function () {
  return src("src/less/style.less")
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(dest("src/css"))
});

function startwatch(){
  watch("src/*.html", series("refresh"));
  watch("src/**/*.js", series("refresh"));
  watch("src/**/*.less", series("css","refresh"));
}

exports.browsersync  = browsersync;

exports.default = parallel(browsersync, startwatch);
