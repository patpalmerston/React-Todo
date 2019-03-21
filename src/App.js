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

  toggleItem = id => {
    console.log('hello toggle');
    this.setState({
      todos: this.state.todos.map( item => {
        if (item.id === id) {
          return {
            ...item,
          completed: !item.completed
          };
        }
        return item;
      })
    });
  } 


  inputHandler = (event) => {
    this.setState({todoInput: event.target.value})
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
    // console.log(() => this.toggleItem)
    return (
      <div className='App-wrapper'>
        <TodoList 
          todoList2={this.state.todos}
          toggle={this.toggleItem}
        />
        <TodoForm funTime={this.submitTodo} notFunTime={this.inputHandler} input={this.state.todoInput} />

      </div>
    );
  }
}

export default App;
