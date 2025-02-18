import React from 'react'
import Reserve from './Pages/Reserve/Reserve'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  

  return (
   <div className="App">
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reserve' element={<Reserve/>}/>
    </Routes>
  </Router>
   </div>
  )
}

export default App
