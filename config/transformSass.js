var sass = require('node-sass');
var fs = require('fs');
var path = require('path');

function transferSass() {
  sass.render({
    file: path.resolve(__dirname, '../src/**/*.scss'), // source scss file
    outputStyle: 'compressed',
  }, function(err, result) {
    if (err) {
      console.log(err);
      return;
    }
    // style.js will exports a string which filled with css transformed from sass
    fs.writeFile(path.resolve(__dirname, '../src/style.js'), "export default '" + result.css.toString().replace(/\n/g, '') + "'", function (err) {
      if (err) {
        console.error(err);
      }
      console.log('css file has been transformed success');
    });
  });
}

transferSass();

// watch the scss file's change
fs.watch(path.resolve(__dirname, '../src/index.scss'), function (event, filename) {
  console.log(event, filename);
  transferSass();
});
