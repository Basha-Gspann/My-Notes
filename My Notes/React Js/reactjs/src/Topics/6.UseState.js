import React,{useState} from 'react'

const UseState = () => {
    const [name,setName] = useState("My Name is");
    const [count,setCount] = useState(0);
  return (
    <>
    <div>
        <h1>{name}</h1>
        <button onClick={()=> setName("Rabbani Basha")}>Click to Know</button>
    </div>

    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count + 1)}>Click to Know</button>
    </div>
    </>
  )
}

export default UseState