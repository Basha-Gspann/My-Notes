import React from 'react'

const Filter = () => {

    const name =['Rabbu','Romeo','Basha','Raju','Sai']
    const filtered = name.filter(a => a.includes('R'))

    // const name =[10,20,30,40,50,60,70]
    // const filtered = name.filter(a => a>30)
  return (
    <div>
      {
        filtered.map(item => <li>{item}</li>)
      }
    </div>
  )
}

export default Filter
