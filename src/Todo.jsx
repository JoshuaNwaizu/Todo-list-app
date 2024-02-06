import React from 'react'
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
const Todo = ({task}) => {
    return (
        <div>
            <p >{task.task}</p>
            <div>
                <FaEdit />
                <FaRegTrashCan />
            </div>
        </div>
    )
}

export default Todo