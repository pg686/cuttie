import React from 'react'
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <div className="container">
    <div className='tokenomics'>
        <motion.h2 initial={{ opacity: 0, y: -200}}
         viewport={ { once: true }}
whileInView={{ opacity: 1,  scaleY: [1,1.2,1],
    y: [0,-50,0], }}   
transition={{ duration: 1, delay: 0 }}>Tokenomics</motion.h2>
        <div className="tokenomicsItems">
            <div className="tokenomicsItem">
            <motion.div initial={{ opacity: 0}}
                 viewport={ { once: true }}
whileInView={{ opacity: 1,  scale: [1,1.1,1]}}   
transition={{ duration: 1, delay: 0.1 }}>
            <img src="./cuttie/images/ugliDog.png" className="tokenomicsImg"  />
            </motion.div> 
            <div className="tokenomicsInfo">
                <motion.h3 initial={{ opacity: 0, y: -200}}
                 viewport={ { once: true }}
whileInView={{ opacity: 1,  scaleY: [1,1.2,1],
    y: [0,-20,0], }}   
transition={{ duration: 1, delay: 0.2 }}>Total Supply</motion.h3>
                <motion.h3 initial={{ opacity: 0, y: -200}}
                 viewport={ { once: true }}
whileInView={{ opacity: 1,  scaleY: [1,1.2,1],
    y: [0,-20,0], }}   
transition={{ duration: 1, delay: 0.3 }}>1 000 000 000</motion.h3>
            </div>
            </div>
            <div className="tokenomicsItem">
            <motion.div initial={{ opacity: 0}}
                 viewport={ { once: true }}
whileInView={{ opacity: 1,  scale: [1,1.1,1]}}   
transition={{ duration: 1, delay: 0.1 }}>
            <img src="./cuttie/images/ugliDog.png" className="tokenomicsImg"  /> 
            </motion.div>
            <div className="tokenomicsInfo">
                <motion.h3 initial={{ opacity: 0, y: -200}}
                 viewport={ { once: true }}
whileInView={{ opacity: 1,  scaleY: [1,1.2,1],
    y: [0,-20,0], }}   
transition={{ duration: 1, delay: 0.2 }}>LP Burned</motion.h3>
                <motion.h3 initial={{ opacity: 0, y: -200}}
                 viewport={ { once: true }}
whileInView={{ opacity: 1,  scaleY: [1,1.2,1],
    y: [0,-20,0], }}   
transition={{ duration: 1, delay: 0.3 }}>100%</motion.h3>
            </div>
            </div>
            <div  className="tokenomicsItem">
                <motion.div initial={{ opacity: 0}}
                 viewport={ { once: true }}
whileInView={{ opacity: 1,  scale: [1,1.1,1]}}   
transition={{ duration: 1, delay: 0.1 }}>
          <motion.img   src="./cuttie/images/ugliDog.png" className="tokenomicsImg"  /> 
      </motion.div>
          
            <div className="tokenomicsInfo">
                <motion.h3 initial={{ opacity: 0, y: -200}}
                 viewport={ { once: true }}
whileInView={{ opacity: 1,  scaleY: [1,1.2,1],
    y: [0,-20,0], }}   
transition={{ duration: 1, delay: 0.3 }}>Tax</motion.h3>
                <motion.h3 initial={{ opacity: 0, y: -200}}
                 viewport={ { once: true }}
whileInView={{ opacity: 1,  scaleY: [1,1.2,1],
    y: [0,-20,0], }}   
transition={{ duration: 1, delay: 0.3 }}>0%</motion.h3>
            </div>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Tokenomics