import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Comp2 from './Comp2';

function Comp1() {
    const name = "adil"
    let age =25;

    return (
        <>
        {name ==='adil' && <h2>Hii i am adil........COMP-1</h2>}
        {age>= 18 ? <Comp2/>: <h2>your age is not </h2>}
           <div className='d-flex justify-content-center'>

            <img src="img/bg5.jpg" alt=""  height='400' width="1000"  />
           </div>

        </>
        
    )
}

export default Comp1
