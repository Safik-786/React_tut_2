import React from 'react'
import RenderObjStudent from './RenderObjStudent'

function ObjStudent() {
    const student=[
        {
            name :'safik',
            mark : 80
        },
        {
            name :'rahul',
            mark : 88
        },
        {
            name :'gudu',
            mark : 78
        },
        {
            name :'adil',
            mark : 95
        },
        
    ]
  return (
    <div>
      {/* { student.map((std)=>{
        return <h3>I am {std.name} and i have secured {std.mark}  mark</h3>
      })} */}
      { student.map((std)=>{
        return <RenderObjStudent std={std}/>
      })}
    </div>
  )
}

export default ObjStudent
