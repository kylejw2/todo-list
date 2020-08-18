// Import Mongo connection packages
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {ObjectId} = require('mongodb');

// Setup Database Object
const url = process.env.DB_URL;
const db_name = process.env.DB_NAME;
const col_name = process.env.COL_NAME;
const options = {
    useUnifiedTopology: true
};

// READ the lists for a specific user
const readLists = (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.findOne({_id: new ObjectId(id)}, (err, result) => {
                assert.equal(err, null);
                resolve(result);
                client.close();
            });
        });
    });
    return iou;
}

// CREATE a new user
const createUser = (user) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.insertOne(user, (err, result) => {
                assert.equal(err, null);
                resolve(result);
                client.close();
            });
        });
    });
    return iou;
}

module.exports = {
    readLists,
    createUser
}