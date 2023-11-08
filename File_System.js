const fs = require('fs');
const path = require('path');

const [sourceDir, targetDir] = process.argv.slice(2);


if (!sourceDir || !targetDir) {
  console.error('Please provide both source and target directory paths.');
  process.exit(1);
}

const copyFilesWithExtensions = (srcDir, tgtDir, extensions) => {
  fs.readdir(srcDir, (err, files) => {
    if (err) {
      return console.error('Error reading source directory:', err);
    }

    const filteredFiles = files.filter(file => extensions.includes(path.extname(file)));

    filteredFiles.forEach(file => {
      const srcFile = path.join(srcDir, file);
      const tgtFile = path.join(tgtDir, file);

      fs.copyFile(srcFile, tgtFile, err => {
        if (err) {
          return console.error(`Error copying file ${file}:`, err);
        }
        console.log(`Copied ${file} to ${tgtDir}`);
      });
    });
  });
};

copyFilesWithExtensions(sourceDir, targetDir, ['.txt', '.jpg']);