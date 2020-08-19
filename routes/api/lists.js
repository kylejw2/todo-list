var express = require('express');
var router = express.Router();
const {
    readLists,
    verifyUser
} = require('../../data/lists');

// Verify the user -- I tried using GET but I recieved an error because GET requests cannot have a body
router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    const data = await verifyUser(email, password);
    res.send(data);
})

// GET a user's lists
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await readLists(id);
    res.send(data);
});

module.exports = router;