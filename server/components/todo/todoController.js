const todoDAL = require("./todoDAL");
const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");


module.exports.addTodo = async (req, res, next) => {
    try {
      const data = req.body;
      if(!data.bucket){
          return next(new AppError("Bucket field is empty",400))
      }
      if(!data.name){
          return next(new AppError("Name field is empty",400))
      }
      //Add Todo
      const addTodo = await todoDAL.addToDo(data);
      return res.status(200).json({ status: "SUCCESS", message: "Todo added successfully" });
    } catch (error) {
        console.error(colors.red, `Error adding new Todo`, error)
        return next(new AppError(error, 400));
    }
}

module.exports.getAllTodos = async (req, res, next) => {
    try {
        const allTodos = await todoDAL.getAllToDos();
        return res.send(allTodos);
    } catch (error) {
        console.error(colors.red, `Error getting Todos`, error)
        return next(new AppError(error, 400));
    }
}

module.exports.updateTodo = async (req, res, next) => {
    try {
      const data = req.body;
      //Add Todo
      const addTodo = await todoDAL.updateToDo(data);
      return res.status(200).json({ status: "SUCCESS", message: "Todo updated successfully" });
    } catch (error) {
        console.error(colors.red, `Error updating new Todo`, error)
        return next(new AppError(error, 400));
    }
}

module.exports.deleteTodo = async (req, res, next) => {
    try {
      const data = req.body;
      //Add Todo
      const deleteTodo = await todoDAL.deleteToDo(data);
      return res.status(200).json({ status: "SUCCESS", message: "Todo deleted successfully" });
    } catch (error) {
        console.error(colors.red, `Error deleting Todo`, error)
        return next(new AppError(error, 400));
    }
}