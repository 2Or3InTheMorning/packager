const pathUtil = require('path');
const fs = require('fs');
const glob = require('glob');

const dist = pathUtil.join(__dirname, '..', '..', 'dist');
const packagerJS = glob.sync('js/packager*.js', {
  cwd: dist
})[0];
const scaffoldingFiles = glob.sync('scaffolding/*.js', {
  cwd: dist
});
console.log(`Found packager.js: ${packagerJS}`);
console.log(`Found scaffolding files: ${scaffoldingFiles.join(', ')}`);

const assets = {};
for (const path of scaffoldingFiles) {
  assets[path] = fs.readFileSync(pathUtil.join(dist, path), 'utf-8');
}

let data = fs.readFileSync(pathUtil.join(dist, packagerJS), 'utf-8');
data = `const __ASSETS__ = ${JSON.stringify(assets)}; ${data}`;
fs.writeFileSync(pathUtil.join(dist, packagerJS), data);
