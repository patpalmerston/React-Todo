import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div>{props.todoList2.map((todoItem, index) =><Todo key={index} todo={todoItem} />
     
    )}
    </div>
  )
}


export default TodoList;