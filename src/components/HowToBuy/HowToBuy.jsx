import React from 'react'
import data from './data.json';
import Card from '../../elements/Card/Card.jsx';
const evenButtonVariant = {
  hidden: {  x: -60 },
  visible: {


      opacity: 1, 
      x: 0,       
      transition: {
          type: 'spring', stiffness: 100, duration: 3
      },


  },


  hover: {
      
              x: [0,-50],
              scale: 1.03,
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              transition: {
                  type: 'spring', stiffness: 100, duration: 3
                  
  }
  }
};

const oddButtonVariant =  {
  hidden: {  x: 60 },
  visible: {
      opacity: 1,
      x: 0,        
      transition: {
          type: 'spring', stiffness: 100, duration: 3
      }
  },
  hover: {
      scale: 1.03,
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      x: [0,-50],
      transition: {
          type: 'spring', stiffness: 200  
      }

}
};

export const textVariants = (delay) => {
  return {
  initial: {
      opacity: 0,
      scale: 0.5
  },
  animate: {
      opacity: 1,
      scale: 1,
      transition: {
          ease: "easeInOut",
          duration: 0.1,
          delay: delay
      }
  }
}
}



const HowToBuy = () => {
  
  return (
    <div className='howToBuyWrapper'>
      <div className="howtobuy">
        <h2>How to Buy</h2>
        <div className="howToBuyItems">
        {data.map((item, index) => {
                    return (
                      <Card
                        variant={index % 2 === 0 ? evenButtonVariant : oddButtonVariant}
                        title={item.title}
                        description={item.description}
                        img={ item.svg }
                        hidden={item.hidden }/>)
                })}
        </div>
      </div>
      </div>
  )
}

export default HowToBuy