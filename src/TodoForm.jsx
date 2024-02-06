import styled from 'styled-components'
import './App.css'
import React from 'react'
import { useState } from 'react'

const TodoFormCon = styled.form`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
`
const Input = styled.input`
padding: 1rem;
border: none;
outline: none;
`
const TodoCardCon = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #999999;
margin-inline: 1rem;
border-radius: 1rem;

`
const Button = styled.button`
padding: 5px;
background-color: white;
border-radius: .5rem;
border: 1px solid #999999;
`

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        addTodo(value)

        setValue('')
    }
    return (
        <TodoCardCon >
            <TodoFormCon onSubmit={handleSubmit}>
                <Input type="text"
                    value={value}
                    className="input-form"
                    placeholder='Enter your tasks'
                    onChange={(e) => setValue(e.target.value)} />
                <Button className="todo-btn">Add</Button>
            </TodoFormCon>
        </TodoCardCon>
    )
}

export default TodoForm
