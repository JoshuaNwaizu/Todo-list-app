import { useState } from "react";
import React from 'react'
import { MdUpdate } from "react-icons/md";
import classes from './EditTodoForm.module.css'


const EditTodoForm = ({ editTodo, task, handleToggleForm }) => {
  const [value, setValue] = useState(task.task)
 
  function handleSubmit(e) {
    e.preventDefault()
    editTodo(value, task.id)
    setShowForm(false);
    setValue('')
  }
  return (
    <div className={classes.TodoCardCon} >
      <form className='TodoFormCon container' onSubmit={handleSubmit}>
        <input type="text"
          value={value}
          className={classes.Input}
          placeholder='Update tasks'
          onChange={(e) => setValue(e.target.value)} />
        <button className={`${classes.Button} todo-btn`} onClick={handleToggleForm}><MdUpdate /></button>
      </form>
    </div>
  )
}

export default EditTodoForm