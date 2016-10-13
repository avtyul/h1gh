let express = require('express');
let router = express.Router();
let PI = require('pi-number');

let dd_options = {
  'response_code':true,
  'tags': ['app:my_app']
}

let connect_datadog = require('connect-datadog')(dd_options);

let app = express();

let counter = 0;

router.get('/', (req, res) => {
  res.send("h3ll0 fri3nd");
});

router.get('/:digits', (req, res) => {
  console.log(`${++counter} : ${req.params.digits}`);
  if (req.params.digits > 12345) {
    res.send('Too much');
  }
  res.send(PI(req.params.digits));
});

app.use(connect_datadog);
app.use(router);

app.listen(3000, () => {
  console.log('App started on port 3000');
});

exports.PI = PI;
