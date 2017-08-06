var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var addr = process.env.MEANAPPDB_URL || "mongodb://localhost:27017/meanappdb";
var options = {};
var _db;

var MongoSingle = function() {
  return new Promise(function(resolve, reject) {
    if(typeof _db === 'undefined') {
      MongoClient.connect(addr, options)
        .then(db => {
          console.log('connected to ' + addr);
          _db = db;
          return resolve(_db);
        })
        .catch(err => { return reject(err); } );
    } else {
      return resolve(_db);
    }
  });
}

module.exports = MongoSingle;
