import React, { useEffect } from 'react';
import AddToDo from "./addToDo";
import ToDoItem from "./todoItems";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllToDos, updateToDo, deleteToDo } from "../redux/actions/todoActions";

const Home = ({
    getAllToDos,
    todo,
    updateToDo,
    deleteToDo
}) => {
    let { todoListData } = todo

    useEffect(() => {
        getAllToDos();
        document.title = "TODO List App";
    }, []);
    
    //Update todo status
    const handleStatusUpdateTodo = (data) => {
        const todoData = {
            _id : data._id,
            status: !data.status
        }
        console.log(todoData)
        updateToDo(todoData);
    }

    // Delete Todo
    const handleDeleteTodo = (data) => {
        console.log(data)
        deleteToDo(data);
    }

    return (
        <>
            <h1>Todo List</h1>
            <AddToDo/>
            {
                todoListData && todoListData.length > 0 ?
                todoListData.map((item,idx) => <ToDoItem 
                key={idx} todo={item}
                updateStatusToDo={handleStatusUpdateTodo}
                deleteTodo={handleDeleteTodo}/>)
                : null
            }
        </>
    );
}

Home.propTypes = {
    getAllToDos: PropTypes.func.isRequired,
    updateToDo: PropTypes.func.isRequired,
    deleteToDo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    todo: state.todo,
});

const mapDispatchToProps = { getAllToDos, updateToDo, deleteToDo };

export default connect(mapStateToProps, mapDispatchToProps)(Home);