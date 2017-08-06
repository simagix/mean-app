const express = require('express');
const router = express.Router();
var MongoSingle = require('../mongo-single');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  MongoSingle()
    .then(db =>  {
      collection = db.collection('books');
      collection.find().toArray()
        .then(docs => { res.status(200).json(docs); } )
        .catch(err => { res.status(500).send(err); } )
  });
});

module.exports = router;
