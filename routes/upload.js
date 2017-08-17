var express = require('express');
var router = express.Router();
const photo = require('../controllers/photo');

router.get('/', photo.form);
router.post('/', photo.submit);

module.exports = router;