const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
router.get('/', homeController.get);
router.post('/', homeController.post);

module.exports = router;