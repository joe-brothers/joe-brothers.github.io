let path = require('path');
let ncp = require('ncp').ncp;

ncp.limit = 16;

let srcPath = 'utils/';
let destPath = 'build/';

console.log('Copying files...');
ncp(srcPath, destPath, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Copying files complete.');
});