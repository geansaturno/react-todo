import { useState } from 'react'
import { TodoInput } from './components/TodoInput/TodoInput'

function App() {
  const [count, setCount] = useState(0)

  function addNewTodo(todo: string) {
    console.log('todo', todo)
  }

  return (
    <main>
      <TodoInput onAdd={addNewTodo}/>
    </main>
  )
}

export default App
