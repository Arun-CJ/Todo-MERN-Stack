import React from 'react';

const ToDoItem = ({
    todo,
    history,
    updateStatusToDo,
    deleteTodo
}) => {
    const checkTodo = todo.status ? `line-through` : ''
    return (
        // displaying Todo list items
        <div className='Card'>
            <div>
                <h1 className='bucket'>{todo.bucket}</h1>
            </div>
            <div className='Card--text'>
                <h1 className={checkTodo}>{todo.name}</h1>
                <span className={checkTodo}>{todo.description}</span>
            </div>
            <div className='Card--button'>
                <button
                onClick={() => updateStatusToDo(todo)}
                className='Card--button__done'
                >
                    {todo.status ? "Mark Incomplete" : " Complete"}
                </button>
                <button
                onClick={() => deleteTodo(todo)}
                className='Card--button__delete'
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ToDoItem;