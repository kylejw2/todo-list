var express = require('express');
var router = express.Router();

const {
  createUser,
  verifyEmail
} = require('../../data/lists');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST a user
router.post('/signup', async (req, res, next) => {
  const body = req.body;
  const data = await verifyEmail(body);
  console.log(data);
  if (data) {
    const response = await createUser(body);
    res.send(response);
  } else {
    res.send(false);
  }
})

module.exports = router;
