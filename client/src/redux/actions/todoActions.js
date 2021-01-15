import axios from "axios";
import {
    GET_ALL_TODOS
} from "../actions/types";

// Add Todo
export const addToDo = (todoData) => (
    dispatch
  ) => {
        axios
        .post("/api/todo", todoData)
        .then((res) => {
            const { message } = res.data;
            alert(message);
            dispatch(getAllToDos());
        })
        .catch((err) => {
            const { message } = err && err.response.data;
            alert(message);
        });
};

// Get All Todo List
export const getAllToDos = () => dispatch => {
    axios
        .get("/api/todo")
        .then((res) => {
            dispatch({
                type: GET_ALL_TODOS,
                payload: res.data
            })
        })
        .catch((err) => {
        const { message } = err && err.response.data;
        alert(message);
        });
};

// Edit Todo
export const updateToDo = (todoData) => (
    dispatch
  ) => {
        axios
        .put("/api/todo", todoData)
        .then((res) => {
            const { message } = res.data;
            alert(message);
            dispatch(getAllToDos());
        })
        .catch((err) => {
            const { message } = err && err.response.data;
            alert(message);
        });
};

// Delete Todo
export const deleteToDo = (todoData) => (
    dispatch
  ) => {
        axios
        .post("/api/todo/delete", todoData)
        .then((res) => {
            const { message } = res.data;
            alert(message);
            dispatch(getAllToDos());
        })
        .catch((err) => {
            const { message } = err && err.response.data;
            alert(message);
        });
};