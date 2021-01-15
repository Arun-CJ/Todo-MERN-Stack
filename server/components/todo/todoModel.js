const mongoose = require("mongoose");

// Create Todo Schema
let todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    description: {
        type: String
    },
    status: {
        type: Boolean,
        required: true
    },
    bucket: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }
});

module.exports = mongoose.model(
    "todos",
    todoSchema,
    "todos"
);
