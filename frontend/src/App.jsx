import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Sub from './components/Sub'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Navbar/>
      <br />
      
      
      <Routes>
        <Route path="/a" element={<Sub/>}/>
        <Route path="/b" element={<Home/>}/>

          
        
      </Routes>
    
      
     </div>
       
    </>
  )
}

export default App
