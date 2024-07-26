import React from 'react'

function Child({sendDataToParent, name}) {
    let handleClick= ()=>{
        let data= "Hello from Child"
        sendDataToParent(data)
    }
  return (
    <div>

        <h5>Child Component Start here -</h5>
        <h6>Data from Parent: {name}</h6>
      <button onClick={handleClick}> Send Data </button>
    </div>
  )
}

export default Child
