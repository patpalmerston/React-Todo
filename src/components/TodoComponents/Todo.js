import React from 'react'

import './Todo.css'

const Todo = (props) => {
  // console.log(props.todo);
  return (
    <div 
      className={props.passTodo.completed ? "completed" : ""} 
      onClick={() => props.toggleItem(props.passTodo.id)}
    >

      <p>{props.passTodo.task}</p>

    </div>
  )
}

export default Todo;
