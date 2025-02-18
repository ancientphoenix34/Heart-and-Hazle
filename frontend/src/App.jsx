import React from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
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
