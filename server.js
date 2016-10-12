let express = require('express');
let PI = require('pi-number');

let app = express();

app.get('/', (req, res) => {
  res.send("h3ll0 fri3nd");
});

app.get('/:digits', (req, res) => {
  if (req.params.digits > 12345) {
    res.send('Too much');
  }
  res.send(PI(req.params.digits));
});

app.listen(3000, () => {
  console.log('App started on port 3000');
});

exports.PI = PI;
