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

// Setup encryption process
const bcrypt = require('bcrypt');
const salt = 10;

// VERIFY a user's credentials
const verifyUser = (email, password) => {
    const iou = new Promise((resolve, reject) => { 
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                let flag = false;
                for (let i = 0; i < docs.length; i++) {
                    if (email === docs[i].email && bcrypt.compareSync(password, docs[i].password)) {
                        resolve(docs[i]._id);
                        flag = true;
                    }
                    if (i === docs.length - 1 && !flag) {
                        resolve(false);
                    }
                }
                client.close();
            });
        });
    });
    return iou;
}

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
                resolve(result.ops);
                client.close();
            });
        });
    });
    return iou;
}

const verifyEmail = (user) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                let flag = false;
                for (let i = 0; i < docs.length; i++) {
                    if (user.email === docs[i].email) {flag = true; break;}
                }
                if (flag) {
                    resolve(false);
                } else {
                    resolve(true);
                }
                client.close();
            });
        });
    });
    return iou;
};

// Update the user's lists
const updateLists = (id, lists) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.findOneAndUpdate(
                {_id: new ObjectId(id)},
                {$set: {...lists}},
                (err, result) => {
                    assert.equal(err, null);
                    resolve(result.value);
                    client.close();
                }
            )
        })
    });
    return iou;
} 

module.exports = {
    readLists,
    createUser,
    verifyUser, 
    verifyEmail,
    updateLists
}