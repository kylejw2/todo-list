var express = require('express');
var router = express.Router();
const {
    readLists
} = require('../../data/lists');

// GET a user's lists
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await readLists(id);
    res.send(data);
});

module.exports = router;