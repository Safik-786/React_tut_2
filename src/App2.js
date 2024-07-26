import React, { useState } from 'react'
import Child from './Components/Child'

export default function App2() {
   const [dataFromChild, setDataFromChild] = useState("")
  return (
    <div>
        <h5>Parent Component--</h5>
      <h6> Data from Child:  {dataFromChild} </h6>
       <hr /> 
       <Child  sendDataToParent= {setDataFromChild} name= "Safik"/> 
      
    </div>
  )
}


