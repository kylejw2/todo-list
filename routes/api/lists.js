var express = require('express');
var router = express.Router();
const {
    readLists,
    createUser,
    verifyUser
} = require('../../data/lists');

// GET the users
router.get('/', async (req, res, next) => {
    const data = await verifyUser('abe@gmail.com', 'im a person');
    res.send(data);
})

// GET a user's lists
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await readLists(id);
    res.send(data);
});

// POST a user
router.post('/', async (req, res, next) => {
    const body = req.body;
    const data = await createUser(body);
    res.send(data);
})

module.exports = router;