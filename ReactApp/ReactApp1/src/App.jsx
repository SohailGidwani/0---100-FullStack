import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //state variable which react keeps track for the updation thingy

  return (
<div>
  <button onClick={()=> setCount(Math.random())}> 
  count is {count}
  </button>
</div>
  )
}

export default App
