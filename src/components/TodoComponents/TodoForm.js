import React from 'react'

const TodoForm = (props) => {
  return (
    <form onSubmit={props.funTime}>
      <input placeholder="type something!" onChange={props.notFunTime} value={props.input}>
      </input>
      <button type='submit'>add</button>
    </form>
  )
}



export default TodoForm;


