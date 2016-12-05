import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = 3000;
const app = express();
const build_type = process.argv[2] === '--prod' ? 'prod' : 'test';

app.use(compression());
app.use(express.static(`dist/${build_type}`));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, `../dist/${build_type}/index.html`));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
