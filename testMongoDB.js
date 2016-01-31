// var MongoClient = require('mongodb').MongoClient
//     , format = require('util').format;
// MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("successfully connected to the database");
//     }
//     db.close();
// });

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

// MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    MongoClient.connect('mongodb://admin:qweszxcad123@ds054128.mongolab.com:54128/dbtest', function(err, db) {
    if(err) throw err;
// mongoexport --db test --collection traffic --out traffic.json
// mongoimport --db users --collection contacts --file contacts.json
// cmd:  Работает!!
// C:\MongoDB\Server\3.2\bin>
// mongoexport -h ds054128.mongolab.com:54128 -d dbtest -c test -u admin -p qweszxcad123 -o c:\OPEN_SERVER\OpenServer\domains\tester\test.json
// mongoimport -h ds054128.mongolab.com:54128 -d dbtest -c test -u admin -p qweszxcad123 --file c:\OPEN_SERVER\OpenServer\domains\tester\package.json
    var collection = db.collection('test');
    collection.insert({login:"max",pass:12345,email:"max@mail.ru"}, function(err, docs) {
        collection.count(function(err, count) {
            console.log(format("count = %s", count));
        });
    });

    // Locate all the entries using find
    collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db
        db.close();
    });
});