import React from 'react'
import { useState,useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion"
import Socials from '../../elements/Socials/Socials.jsx';
import Copy from '../../elements/Copy/Copy.jsx';
import { Tweet } from 'react-tweet'
const Home = ({wagmi, toggleWagmi}) => {
    console.log(wagmi, "toggleWagmi")
    const controls = useAnimationControls()

  return (
    <div className="home">
        <div className="container homeContainer">
          <div>
          <motion.h2 animate={{ 
            
            y: [0, -30, 0]      
          }}
          transition={{
            duration: 5,       
            ease: "easeInOut",   
            repeat: Infinity,   
            repeatDelay: 0        
          }}>$ugli</motion.h2>
 
          </div>
        <div className='wojakSection'>
         <motion.span className="homeImgSpan"  
          animate={controls}
          whileInView={{
            rotate: [0, 5, -5, 5, 0],
                     rotateY: 360,
                     y: [0,-5,0],
                     transition: {
                         duration: 1,
                         ease: "easeInOut",
                         delay: 0
                     }}}
     > <img src="/images/ugliDog.png" className="homeImg"   /></motion.span>

        </div>
        <div className='homeInfo'>       
        <Copy />
           
              <Socials />
        </div>
        </div>
        </div>
  )
}

export default Home