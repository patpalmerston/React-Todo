import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
 
];


let id = 0;

class App extends React.Component {
 
  constructor() {
      super();
      this.state = {
       
        todos: todoList,
        todoInput: ''
    };
  }

  //event handlers


  inputHandler = (event) => {
    this.setState({todoInput: event.target.value})
    console.log(event.target);
  }

  submitTodo = (event) => {
    event.preventDefault();
    let todosCopy = this.state.todos.slice()
    todosCopy.push({
      task: this.state.todoInput,
      id: Date.now(),
      completed: false
    })
    this.setState({todos: todosCopy, todoInput: ''})
  }


  render() {
    return (
      <div className='App-wrapper'>
        <TodoList todoList2={this.state.todos} />
        <TodoForm funTime={this.submitTodo} notFunTime={this.inputHandler} input={this.state.todoInput} />

      </div>
    );
  }
}

export default App;
