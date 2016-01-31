var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});