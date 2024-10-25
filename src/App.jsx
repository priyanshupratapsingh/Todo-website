import React,{ useState } from 'react'
import './App.css'
import './components/List'
import List from './components/List'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handleAdd=() =>{
    // for unique id go to uuid on google and npm i uuid and import it here and then use it as uuidv4()
    settodos([...todos, {todo, id: uuidv4(), isCompleted: false}])
    settodo("")
  }

  const handleChange=(e) =>{
    settodo(e.target.value)
  }
  return (
    <div className="body">
      <h3>Add Todo</h3>
      <div className="btn">
        <input onChange={handleChange} value={todo} type="text" />
        <button onClick={handleAdd} className='addbtn'>Save</button>
      </div>

      <div className="tasks">
        <h3>Your Todo</h3>
        {todos.length === 0 ? <div className='notodo'><h4>No Todos to display</h4></div> : ""}
        {todos.map(item => {
          return <List key={item.id} title={item.todo} id={item.id} todos={todos} settodos={settodos}/>
        })}
      </div>

    </div>
  )
}

export default App
