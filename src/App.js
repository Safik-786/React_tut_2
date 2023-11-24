import React from 'react'
import Comp1 from './Components/Comp1';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Student from './Components/Student';
import ObjStudent from './Components/ObjStudent';

function App() {
  return(
    <div>
      
      <NavBar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/render' element={<Comp1/>}/>
        <Route path='/list' element={
        <>
        <div style={{display:'flex',}}>
              <div style={{border:"2px solid black",width:"50%" ,textAlign:"center"}}>
                <h1>List Rendring</h1>
                <Student />
              </div>
              <div style={{border:"2px solid black",width:"50%" ,textAlign:"center"}}>
                <h1>Object Rendring</h1>
                <ObjStudent />
              </div>
        </div>
        </>
        
        }/>

      </Routes>
    </div>
  )
}

export default App;
