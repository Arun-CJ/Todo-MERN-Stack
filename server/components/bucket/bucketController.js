const bucketDAL = require("./bucketDAL");
const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");

// Get Bucket list controller
module.exports.getAllBuckets = async (req, res, next) => {
    try {
        const bucketList = await bucketDAL.getAllBuckets();
        return res.send(bucketList);
    } catch (error) {
        console.error(colors.red, `Error getting bucket list`, error)
        return next(new AppError(error, 400));
    }
}

// Add Bucket controller
module.exports.addBucket = async (req, res, next) => {
    try {
      const data = req.body;
      if(!data.name){
          return next(new AppError("Name field is empty",400))
      }
      //Checking if Bucket Name Exists
      const bucketExist = await bucketDAL.getBucketByName(data)
      if (bucketExist) return next(new AppError("Bucket name already exists !!!", 400))
      //Add Bucket
      const addBucket = await bucketDAL.addBucket(data);
      return res.status(200).json({ status: "SUCCESS", message: "Bucket added successfully" });
    } catch (error) {
        console.error(colors.red, `Error adding new bucket`, error)
        return next(new AppError(error, 400));
    }
}