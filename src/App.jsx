import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'


function App() {

  return (
  <Routes>
    <Route index element={<Home/>}/>
    <Route path="/about-us" element={<AboutUs/>}/>
  </Routes>
  )
}

export default App
