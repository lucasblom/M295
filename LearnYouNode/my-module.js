const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err){
        return callback(err);
    }; 
    const filteredFiles = files.filter((file) => {
      return path.extname(file) === '.' + ext;
    });
    callback(null, filteredFiles);
  });
};
