import React from 'react';

function Todo({todo, toggleComplete, removeTodo}){
    function chekboxClick(){
        toggleComplete(todo.id);
    }

    function removeClick(){
        removeTodo(todo.id);
    }

    return(
        <div className="todo"
            style={{
                background: todo.done ? "#82ccdd" : null
            }}
        >
            <label className="container">
                <input type="checkbox" onClick={chekboxClick} />
                <span className="checkmark" />
                <li 
                    style={{
                        textDecoration: todo.done ? "line-through" : null 
                    }}
                >
                {todo.task}
            </li>
            </label>
            <button 
                onClick={removeClick}
            >
                X
            </button>
        </div>
    );
}

export default Todo;