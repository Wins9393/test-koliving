import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function TodoForm({addTodo}){
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        done: false
    });

    function taskInputChange(event){
        setTodo({...todo, task: event.target.value});
    }
    
    function handleSubmit(event){
        event.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuidv4() });
            // reset la tache
            setTodo({...todo, task: ""});
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="task"
                placeholder="Ajoutez une todo"
                type="text"
                value={todo.task}
                onChange={taskInputChange} 
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TodoForm;