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
import { runAnimation } from "use-confetti-svg";
import { useConfetti } from "use-confetti-svg";
function App() {

  return (
    <div className="main">

          <img src="/images/background.png" className='imgBackground'/>
          
          <div className="ugliObjectsWrapper">
               <img src="/images/logo.png" alt="" className="ugliObjectImg" />
               <img src="/images/logo.png" alt="" className="ugliObjectImg" />
               <img src="/images/logo.png" alt="" className="ugliObjectImg" />
               <img src="/images/logo.png" alt="" className="ugliObjectImg" />
               <img src="/images/logo.png" alt="" className="ugliObjectImg" />
               <img src="/images/logo.png" alt="" className="ugliObjectImg" />
               <img src="/images/logo.png" alt="" className="ugliObjectImg" />
               <img src="/images/logo.png" alt="" className="ugliObjectImg" />
               <img src="/images/logo.png" alt="" className="ugliObjectImg" />
               <img src="/images/logo.png" alt="" className="ugliObjectImg" />
              
            </div>
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