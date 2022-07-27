// rafce 

import React,{useState} from 'react'

const FunctionComponents = () => {
    const [name,setName] = useState("Rabbani Basha")
  return (
    <div>
        <h1>My Name is {name}</h1>
    </div>
  )
}

export default FunctionComponents