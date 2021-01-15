// import mongoose models
const todoModel = require("./todoModel");
const mongoose = require("mongoose");

async function addToDo(data) {
    data.createdAt = new Date();
    data.updatedAt = new Date();
    data.status = false;
    const details = new todoModel(data);
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

async function getAllToDos() {
  try {
    let result = await todoModel.find({}).sort({ _id: -1 }).lean();
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

async function updateToDo(data) {
  try {
    data.updatedAt = new Date();
    let result = await todoModel.findOneAndUpdate({ _id:mongoose.Types.ObjectId(data._id) }, data, {
      new: true,
    });
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

async function deleteToDo(data) {
  try {
    let result = await todoModel.deleteOne({ _id: data._id });
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
    addToDo,
    getAllToDos,
    updateToDo,
    deleteToDo    
};
