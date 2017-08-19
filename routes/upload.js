var express = require('express');
var router = express.Router();
const photo = require('../controllers/photo');

router.get('/', photo.form);
router.post('/', photo.submit);
router.get('/downland/:id', photo.downland);

module.exports = router;