const router = require('express').Router();
const {getData} = require("../controllers/home")

router.get('/', getData);

module.exports = router