var express = require('express');
var router = express.Router();
const photo = require('../controllers/photo');

/* GET home page. */
router.get('/', photo.list);

module.exports = router;
