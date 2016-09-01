var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
		
    var collection = db.get('userlist');
    collection.find({},{}).then(docs => {
        res.json(docs);
    })
	});

module.exports = router;
