var express = require('express');
var router = express.Router();

// For more info, see: https://expressjs.com/en/guide/routing.html

router.get('/', (req, res) => {
  res.send('hi');
});

router.get('/chicken-coop', (req, res) => {
  res.send('GET /basic-routing/chicken-coop');
});

router.post('/chicken-coop', (req, res) => {
  res.send('POST /basic-routing/chicken-coop');
});

router.put('/chicken-coop', (req, res) => {
  res.send('PUT /basic-routing/chicken-coop');
});

router.delete('/chicken-coop', (req, res) => {
  res.send('DELETE /basic-routing/chicken-coop');
});

module.exports = router;
