import React from 'react'
import { motion } from "framer-motion";
const Memes = ({memesArr, isReversed}) => {

  return (

        <div className='memeWrapper'>
          <div className="gridContainer">

{memesArr.map(meme =><motion.div   
  viewport={ { once: true }}
  whileHover={{ scale: 0.94, transition: {
    duration: 0.2,
    ease: "easeOut",
    repeat: 0,
    repeatDelay: 0,
    delay: 0
 } }}
  whileInView={{
                y: -30,
                
                transition: {
                   duration: 0.2,
                   ease: "easeOut",
                   repeat: 0,
                   repeatDelay: 0,
                   delay: 0
                }
            }} className="box">{meme.type === 'img' ? <img src={`https://pg686.github.io/cuttie/images/${meme.data}.jpg`} loading='lazy' fetchPriority='high' decoding='async' className='sliderImg'/> : <video autoPlay loop muted>
          <source src={`https://pg686.github.io/cuttie/images/${meme.data}.gif.mp4`} type = 'video/mp4'/>
          </video>}</motion.div>)}

        </div>
        </div>
  )
}

export default Memes