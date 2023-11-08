const express = require("express");


const {comment} = require("../controllers/commentController");

const router = express.Router();

router.post('/comments', comment);

module.exports = router;
