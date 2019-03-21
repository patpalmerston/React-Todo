import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {
  console.log(props);
  return (
    <div>{props.todoList2.map((todoItem, index) =><Todo key={index} passTodo={todoItem} toggleItem={props.toggleItem} />
     
    )}
    </div>
  )
}


export default TodoList;