'use strict';

let sass = require('node-sass');
let fs = require('fs');
let chokidar = require('chokidar');

function compileSass(filePath) {
  sass.render(
    {
      file: filePath,
      outputStyle: 'compressed',
    },

    function(err, result) {

      if (err) {
        console.log(err);
        return;
      }

      let compiledCssFile = filePath.replace(/.scss/g, '.css');

      fs.writeFile(compiledCssFile, result.css.toString(), function (err) {
        if (err) {
          console.error(err);
        }
        console.log(filePath + '.css generated.');
      });
  });
}

function addWatcher(){

  let watcher = chokidar.watch('./src/**/*.scss', {persistent: true});

  watcher
    .on('add', function(path) {
      compileSass(path);
    })
    .on('change', function(path) {
      compileSass(path);
    })
    .on('unlink', function(path) {console.log('File', path, 'has been removed');})
    .on('error', function(error) {console.error('Error happened', error);});
}

module.exports = addWatcher;
