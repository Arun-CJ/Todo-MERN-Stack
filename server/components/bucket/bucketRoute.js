const express = require("express");
let router = express.Router();
const bucketController = require("./bucketController");

router
    .route("/")
    .get(bucketController.getAllBuckets)
    .post(bucketController.addBucket);

module.exports = router;
