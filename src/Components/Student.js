import React from 'react'

function Student() {
    const student= ['safik','rahul','adil','safik']
    const mark=[56,58,78,46,97,86,64,74]

    const abc=mark.map(m =><h3>{m = m*2}</h3> )
  return (
    <div>
      {student.map((std)=>{
        return <h2>{std}</h2>
      })}

      {
        abc
      }
      {
        mark.map(m=><h5>{m-5}</h5>)   // m minus 5
      }
    </div>
  )
}

export default Student
