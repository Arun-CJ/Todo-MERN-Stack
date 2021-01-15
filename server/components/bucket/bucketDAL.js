// import mongoose models
const bucketModel = require("./bucketModel");
const mongoose = require("mongoose");

async function addBucket(data) {
    data.createdAt = new Date();
    data.updatedAt = new Date();
    const details = new bucketModel(data);
    try {
        let result = await details.save();
        return result;
    } catch (err) {
        console.log(err)
        if (err.message) {
            throw err.message;
        } else {
            throw err;
        }
    }
}

async function getAllBuckets() {
  try {
      let result = await bucketModel.find({}).sort({ _id: -1 }).lean();
      return result;
  } catch (err) {
        console.log(err)
        if (err.message) {
            throw err.message;
        } else {
            throw err;
        }
  }
}


async function getBucketByName(data) {
    try {
        let result = await bucketModel.findOne({name: data.name});
        return result;
    } catch (err) {
        console.log(err)
        if (err.message) {
        throw err.message;
        } else {
        throw err;
        }
    }
}

module.exports = {
    addBucket,
    getAllBuckets,
    getBucketByName   
};
