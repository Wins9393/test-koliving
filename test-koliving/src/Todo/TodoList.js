import React, {Component} from 'react';

class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            done: false,
            userInput: '',
            todos: []
        };
    }
    
    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            todos: [...this.state.todos, this.state.userInput]
        });
    }

    deleteTodo(todo){
        const array = this.state.todos;
        const index = array.indexOf(todo);
        array.splice(index, 1);
        this.setState({
            todos: array
            }
        );
    }

    toggleTodo(todo){
        const divTodo = document.querySelector('#div-todo');

        if(this.state.done === true){
            this.setState({
                done: false
                }
            );
            divTodo.removeAttribute('class');
            divTodo.setAttribute('class', 'todo');
        }else{
            this.setState({
                done: true
                }
            );
            divTodo.removeAttribute('class');
            divTodo.setAttribute('class', 'todo done');
        };
    }

    renderTodos(){
        return this.state.todos.map((todo, index) => {
            return(
                <div id="div-todo" className="todo" key={todo}>
                    {todo}
                    <div>
                        <button onClick={this.toggleTodo.bind(this, todo)}>Fait/A faire</button> 
                        <button onClick={this.deleteTodo.bind(this, todo)}>Supprimer</button>
                    </div>
                    
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                <h1>Test TodoList React Koliving</h1>
                <form>
                    <input 
                        value={this.state.userInput} 
                        type="text" 
                        placeholder="Ajoutez une todo" 
                        onChange={this.onChange.bind(this)}
                    />
                    <button onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>
                <div className="container-todo">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;