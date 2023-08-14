import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Themes from './components/Themes'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Themes />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
