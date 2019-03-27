const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* GET route to test creating your own route and view */
router.get('/cool', (req, res, next) => {
  res.render('cool', { name: 'Brian' });
});

module.exports = router;
