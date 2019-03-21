import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {
  console.log(props);
  return (
    <div>{props.todoList2.map((todoItem, index) =><Todo key={index} todo={todoItem} toggle={props.toggle} />
     
    )}
    </div>
  )
}


export default TodoList;