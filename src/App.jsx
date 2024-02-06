import './App.css'
import TodoWrapper from './TodoWrapper'
import styled from 'styled-components'

const Container = styled.div`
max-width: 1120px;
margin-inline: var(--mb-1-5);
padding-block: 3rem 1rem;
`

function App() {

  return (
    <Container className="App">
      <TodoWrapper />
    </Container>

  )
}

export default App
