import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import MemeList from './components/Memes/MemeList.jsx';
import Tokenomics from './components/Tokenomics/Tokenomics.jsx';
import HowToBuy from './components/HowToBuy/HowToBuy.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Roadmap from './components/Roadmap/Roadmap.jsx';
import {useRef, useState, useEffect } from 'react';
function App() {

  return (
    <div className="main">

<video autoPlay loop muted id="video">
          <source src="/images/background.mp4" type = 'video/mp4'/>
          </video>
          <div className="content">
          <div className='backgroundWrapper'>
    <Navbar />
    <Home/>
    <About />
    <MemeList />
    <Tokenomics />
    <Roadmap /> 
    <Contacts />
    </div>
    </div>
    </div>

  )
}

export default App