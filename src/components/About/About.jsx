import React from 'react'
import { motion } from "framer-motion";
const About = () => {
  const pcButtonVariantLeft =  {
    hidden: {opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0,    
      transition:{ type: 'spring',  duration: 3 }
    }
  };
  const mobileButtonVariantLeft =  {
    hidden: {opacity: 0, x: -20 },
    visible: {
      opacity: 1, x: 0,    
      transition:{ type: 'spring',  duration: 3 }
    }
  }
  const pcButtonVariantRight =  {
    hidden: {opacity: 0, x: 100 },
    visible: {
      opacity: 1, x: 0,    
      transition:{ type: 'spring',  duration: 3 }
    }
  };
  const mobileButtonVariantRight =  {
    hidden: {opacity: 0, x: 20 },
    visible: {
      opacity: 1, x: 0,    
      transition:{ type: 'spring',  duration: 3 }
    }
  }
  return (
        <div className="about">  
         <motion.div  viewport={ { once: true }} variants={window.innerWidth <= 1100 ? mobileButtonVariantLeft : pcButtonVariantLeft} initial="hidden" whileInView="visible" className="tweetPost">
         <a href='https://x.com/thegallowboob/status/1441670584190992385'><img src="/images/tweeter.png" alt="" className="tweetImg" /></a>
        </motion.div>
        <motion.div  viewport={ { once: true }}  variants={window.innerWidth <= 1100 ? mobileButtonVariantRight : pcButtonVariantRight} initial="hidden" whileInView="visible" className='aboutContainer'>
        <div className='aboutSection'>
            <motion.h2>About</motion.h2>
        <div className="aboutInfo">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
        </motion.div>
        </div>
  )
}

export default About