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
        <p className="firstLine">Sometimes nightmares do come true. </p>
        <p className='secondLine'>Meet Ugli, the dog that will steal your wife, eat your kids, and proceed to father superior kids while you thank him along the way</p>
        <p className='thirdLine'>Rumor has it if you stare too long at this dog an orphan dies and Bruno Mars writes a new song.  Not sure which is worse.</p>
        </div>
        </div>
        </motion.div>
        </div>
  )
}

export default About