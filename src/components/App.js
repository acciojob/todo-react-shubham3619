
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [toDo, setTodo] = useState("")
  const [task, setTask] = useState("")
  
  function handleInput(e) {
    setTodo(e.target.value)
  }

  function addBtn() {
    setTask(toDo)
    setTodo("")
  }

  function deleteBtn() {
    setTask("")
  }

  return (
    <div>
      <h3>To-Do List</h3>
      <input
        value={toDo}
        onChange={handleInput}
      />
      <button type="submit" onClick={addBtn}>Add Todo</button>


      {
        task && (
          <div>
            <p>{task}</p>
            <button onClick={deleteBtn}>Delete</button>
          </div>

        )
      }

      

    </div>
  )
}

export default App
