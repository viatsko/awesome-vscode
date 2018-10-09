const { spawn } = require('child_process');
const fs = require('fs');
const gifsicle = require('gifsicle');
const fetch = require('node-fetch');
const path = require('path');
const sharp = require('sharp');
const url = require('url');

/* regex, used to find all external image links in README.md */
const imagesRegEx = new RegExp('(https?://.*.(?:png|jpe?g|gif))', 'ig');

/* calculating paths */
const root = path.join(__dirname, '..');
const imagesPath = path.join(root, 'extensions', 'screenshots');
const readmeFile = path.join(root, 'README.md');

/* returns an array of external images in a file */
const findExternalImageLinks = filename => {
  const contents = fs.readFileSync(filename, {
    encoding: 'UTF-8',
  });

  const result = [];

  let m;
  while ((m = imagesRegEx.exec(contents))) {
    result.push(m[0]);
  }

  return result;
};

const getBasename = link => {
  return path.basename(url.parse(link).pathname);
};

const convertGif = async filename => {
  const absolutePath = path.resolve(filename);

  return new Promise((resolve, reject) => {
    const gifStream = spawn(gifsicle, [
      '--resize-fit-width',
      '600',
      absolutePath,
    ]);

    const fileStream = fs.createWriteStream(
      `${absolutePath.substr(0, absolutePath.lastIndexOf('.'))}`
    );

    gifStream.stdout.pipe(fileStream);

    fileStream.on('finish', () => {
      resolve();
    });
  });
};

const convertSharp = async filename => {
  const absolutePath = path.resolve(filename);

  return sharp(filename)
    .resize(600)
    .toFile(absolutePath.substr(0, absolutePath.lastIndexOf('.')));
};

(async () => {
  const externalImageLinks = findExternalImageLinks(readmeFile);

  for (const link of externalImageLinks) {
    /* assuming that links within this repo don't need any convertation */
    if (
      link.indexOf(
        'https://raw.githubusercontent.com/viatsko/awesome-vscode'
      ) !== -1
    ) {
      continue;
    }

    /* getting just a filename out of a link */
    const basename = getBasename(link).toLowerCase();

    /* localPath is where the file will be stored in this repo */
    const localPath = `${path.join(imagesPath, basename)}.tmp`;

    /* downloading file */
    const res = await fetch(link);
    await new Promise((resolve, reject) => {
      const fileStream = fs.createWriteStream(localPath);

      res.body.pipe(fileStream);

      res.body.on('error', err => {
        reject(err);
      });

      fileStream.on('finish', function() {
        resolve();
      });
    });

    process.stdout.write(`Downloaded ${link}\n`);

    if (/gif$/i.test(basename)) {
      await convertGif(localPath);
      process.stdout.write(`Converted .gif ${link}\n`);
    } else {
      await convertSharp(localPath);
      process.stdout.write(`Converted using sharp ${link}\n`);
    }
  }
})();
