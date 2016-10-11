let express = require('express');
let parser = require('body-parser');
let PI = require('pi-number');

let app = express();
app.use(parser.json());

app.post('/', (req, res) => {
  res.send(PI(req.body.digits));
});

app.listen(3000, () => {
  console.log(`App started on port 3000`);
});

exports.PI = PI;
