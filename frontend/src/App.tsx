import React from 'react'
import Home from './pages/Home'
import Studio from "./pages/Studio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/studio' element={<Studio/>}/>
      </Routes>
    </Router>
   
  )
}

export default App
