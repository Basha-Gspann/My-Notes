import React from 'react'

const Map = () => {
    const arr = ["One","Two","Three","Four"]

    // const arr =[
    //     {
    //         id:1,
    //         title:"One"
    //     },
    //     {
    //         id:2,
    //         title:"Two"
    //     },
    //     {
    //         id:3,
    //         title:"Three"
    //     },
    //     {
    //         id:4,
    //         title:"Four"
    //     }
    // ]
  return (
    <div>
      {
        arr.map(
            (value,index) => 
            <li key={index}>{value}</li>
        )
      }
{/* With Objects */}
{/* {
        arr.map(
            (value) => 
            <li key={value.id}>{value.title}</li>
        )
      } */}
    </div>
  )
}

export default Map
