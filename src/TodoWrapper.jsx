import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import './App.css'
const ID = uuidv4()

//import styled from 'styled-components'
import { Container } from './assets/ReuseableCss'

//const BgCon = styled.div``
const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    function handleTodos(todo) {
        setTodos([...todos,
        {
            task: todo,
            isEditing: false,
            id: ID,
            completed: false
        }])
        console.log(todos)
    }
    return (
        <Container className='todoWrapper'>
            <div>
                <TodoForm addTodo = {handleTodos}/>
                {...todos.map((todo, index) =>  <Todo task={todo} key={index}/> )}
            </div>
        </Container>
    )
}

export default TodoWrapper
