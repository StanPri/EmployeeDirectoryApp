// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */

const build_type = process.argv[2] === '--prod' ? 'prod' : 'test';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  fs.writeFile(`dist/${build_type}/index.html`, $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`index.html written to /dist/${build_type}`.green);
  });
});
