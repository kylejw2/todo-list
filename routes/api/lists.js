var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
const {
    readLists
} = require('../../data/lists');

// GET a user's lists
router.get('/:id', async (req, res, next) => {
    const token = req.header('auth');

    if (token) {
        const decoded = await jwt.verify(token, process.env.JWT_KEY);
        const data = await readLists(decoded.id);
        res.send(data);
    } else {
        res.status(403).send();
    }
    
});

module.exports = router;