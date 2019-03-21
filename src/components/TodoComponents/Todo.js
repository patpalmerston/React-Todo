import React from 'react'

const Todo = (props) => {
  // console.log(props.todo);
  return (
    <div onClick={props.toggle}>

      <p>{props.todo.task}</p>

    </div>
  )
}

export default Todo;
