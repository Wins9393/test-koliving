import React, {useEffect, useState} from 'react';
import './App.css';
import TodoForm from './Todo/TodoForm';
import TodoList from './Todo/TodoList';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return{
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <div className="divForm">
        <p>Todo List - Test Koliving</p>
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="container-todo">
        <TodoList 
            todos ={todos} 
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
