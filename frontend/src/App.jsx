import React from 'react'
import Reserve from './Pages/Reserve/Reserve'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './Pages/Menu/Menu'


function App() {
  

  return (
   <div className="App">
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reserve' element={<Reserve/>}/>
      <Route path='/menu' element={<Menu/>}/>
    </Routes>
  </Router>
   </div>
  )
}

export default App
