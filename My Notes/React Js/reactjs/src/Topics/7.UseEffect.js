// Drf:- whenever return block executed immidiatly this useEffect will be executed.(depends on dependices)

import React,{useState,useEffect} from 'react';

const UseEffect = () => {

  {/* Without dependies */}
  const [count,setCount] = useState(0);
  useEffect(()=> console.log('Clicked'),[])

  {/* With dependies */}
  const [count1,setCount1] = useState(0);
  useEffect(()=> console.log('Clicked'),[count1])

  {/* With dependies with number */}
  const [count2,setCount2] = useState(0);
  useEffect(()=> console.log(count2),[count2])

  return (
    <>

    {/* Without dependies */}

    <div>
      <h1>Clicked {count} </h1>
      <button onClick={()=> setCount(count + 1)}>Click Me</button>
    </div>

    {/* With dependies */}

    <div>
      <h1>Clicked {count1} </h1>
      <button onClick={()=> setCount1(count1 + 1)}>Click Me</button>
    </div>

    {/* With dependies with number */}

    <div>
      <h1>Clicked {count2} </h1>
      <button onClick={()=> setCount2(count2 + 1)}>Click Me</button>
    </div>

    </>
  )
}

export default UseEffect