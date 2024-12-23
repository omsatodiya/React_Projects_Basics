import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(10);
  let [msg, setMsg] = useState(""); // State for the message

  const increaseCount = () => {
    if (count === 20) {
      setMsg("Can't increase the counter as it is 20");
    } else {
      setCount(count + 1);
      setMsg(""); // Clear the message
    }
  }

  const decreaseCount = () => {
    if (count === 0) {
      setMsg("Can't decrease the counter as it is 0");
    } else {
      setCount(count - 1);
      setMsg(""); // Clear the message
    }
  }

  return (
    <>
      <h1>Counter Mini Project for Learning Hooks</h1>
      <h3>Value of Counter : {count}</h3>

      <button onClick={increaseCount}>
        Increment Counter : {count}
      </button>

      <button onClick={decreaseCount}>
        Decrement Counter : {count}
      </button>

      <p style={{ color: "red", fontWeight: "bold" }}>{msg}</p>
    </>
  )
}

export default App;
