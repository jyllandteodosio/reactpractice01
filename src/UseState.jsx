import { useState } from 'react'
import './App.css'

function UseState() {
  const [counter, setCounter] = useState(0)
  const [lightSwitch, setLightSwitch] = useState(false)
  const [randomInput, setRandomInput] = useState("")
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState("")

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  const checkRandomInput = (event) => {
    setRandomInput(event.target.value)
  }

  const changeText = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }

  const addListItem = (e) => {
    e.preventDefault()
    const task = document.getElementById("todo-input").value
    let taskId = tasks.length
    console.log(task)
    setTasks([...tasks, {
      id: taskId++,
      name: task
    }])
    setText("")
  }

  return (
    <>
      <h1>UseState</h1>
      <div>
        <h2>Exercise 1: Counter App</h2>
        <p>Counter value : {counter}</p>
        <p>
          <button
            onClick={addValue}
          >Increment</button> {""}
          <button
            onClick={removeValue}
          >Decrement</button>
        </p>
        <br />
        <hr />
      </div>

      <div>
        <h2>Exercise 2: Toggle Light</h2>
        <p className="green-text">ON</p>
        <div id="light-switch-box">
          <button id="light-switch" className={lightSwitch ? "green" : "red"} onClick={() => setLightSwitch(!lightSwitch)}></button>
        </div>
        <p className="red-text">OFF</p>
        <br />
        <hr />
      </div>

      <div>
        <h2>Exercise 3: Input Tracker</h2>
        <b><label htmlFor="random-input">Enter text: </label></b>
        <p><input id="random-input" type="text" onChange={checkRandomInput}></input></p>
        <p><b>Display text: </b></p>
        <p>{randomInput}</p>
        <p></p>
        <br />
        <hr />
      </div>

      <div>
        <h2>Exercise 4: Dynamic List</h2>
        <ul id="todo-list">
          {tasks.map(task => (
            <li className="todo-list-item" key={task.id}>{task.name}</li>
          ))}
        </ul>
        <form onSubmit={addListItem}>
          <input id="todo-input" type="text" onChange={changeText} value={text}></input>
          {" "}
          <button id="add-item" type="submit">Add Item</button>
        </form>
        <p></p>
        <br />
        <hr />
      </div>

    </>
  )
}

export default UseState
