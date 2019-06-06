const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

babel.transformFile(path.resolve(__dirname, './index.js'), {}, (err, result) => {
  if (!err) fs.writeFile('dist.js', result.code, (err) => {
    if (!err) console.log(`编译完成：dist.js`);
  });
});