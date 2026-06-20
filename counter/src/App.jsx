import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{margin: "40px"}}>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        > Increase
        </button>
        {count>0 &&
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        > Decrease
        </button>
        }
        <button
          type="button"
          className="counter"
          onClick={() => setCount(0)}
        > Reset
        </button>
        </div>
        <h1>Count is {count}</h1>
    </>
  )
}

export default App
