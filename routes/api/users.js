var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

const {
  createUser,
  verifyEmail,
  verifyUser
} = require('../../data/lists');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST a user, and send them a token
router.post('/signup', async (req, res, next) => {
  const body = req.body;
  const data = await verifyEmail(body);
  if (data) {
    const response = await createUser(body);
    // assign a token and send it
    const token = await jwt.sign({ id: response[0]._id}, process.env.JWT_KEY)
    console.log(response[0]._id);
    res.send(token);
  } else {
    res.status(401).send();
  }
});

// Verify the user, give them a token
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  const data = await verifyUser(email, password);
  if (data !== false) {
      // assign token and send it. Otherwise, send a false value
      const token = await jwt.sign({ id: data }, process.env.JWT_KEY);
      res.set('auth', token);
      res.set('Access-Control-Expose-Headers', 'auth');
      res.send();
  } else {
      res.status(401).send();
  }
})

module.exports = router;
