import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
// import Home from './pages/Home'


function App() {

  return (
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path="/about-us" element={<Home/>}/>
  </Routes>
  )
}

export default App
