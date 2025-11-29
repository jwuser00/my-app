import { useState } from 'react'
import './App.css'

function AppJSX() {
  const [count, setCount] = useState(0)
  const name = "jongwon"
  const list = ['우유', '쥬스', 'cola']
  return <>
    <h1 className="orange">{`hello ${name}`}</h1>
    <p>{name}</p>
    <h1 style={{ color: "blue" }}> hello world 2</h1>
    <ul>
      {list.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  </>;
}

export default AppJSX
