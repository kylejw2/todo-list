var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
const {
    readLists,
    updateLists
} = require('../../data/lists');

// GET a user's lists
router.get('/', async (req, res, next) => {
    const token = req.header('auth');

    if (token) {
        const decoded = await jwt.verify(token, process.env.JWT_KEY);
        const data = await readLists(decoded.id);
        const cleanObj = {
            name: data.name,
            id: data._id,
            lists: data.lists
        }
        res.send(cleanObj);
    } else {
        res.status(403).send();
    }
});

// Update the user's lists
router.patch('/', async (req, res) => {
    const id = req.header('id');
    const body = req.body;
    const data = updateLists(id, body);
    res.send(data);
});

module.exports = router;