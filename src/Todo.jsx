import React from 'react'
import './Todo.css'
import { CiEdit } from "react-icons/ci";
import { TfiTrash } from "react-icons/tfi";


const Todo = ({ task, onComplete, onDelete, editTodo }) => {
    return (
        <div className='tasks container'>
            <p onClick={() => onComplete(task.id)} className={`${task.completed ? 'completed' : ''} `}>{task.task}</p>
            <div className='icons'>
                <CiEdit className='edit' onClick={() => editTodo(task.id)} />
                <TfiTrash className='trash' onClick={() => onDelete(task.id)} />
            </div>
        </div>
    )
}

export default Todo