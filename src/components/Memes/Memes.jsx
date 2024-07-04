import React from 'react'
const Memes = ({memesArr, isReversed}) => {

  return (

        <div className='memeWrapper'>
          <div className="gridContainer">

{memesArr.map(meme =><div className="box"><img src={`/images/${meme}.jpg`} loading='lazy' fetchPriority='high' decoding='async' className='sliderImg'/></div>)}

        </div>
        </div>
  )
}

export default Memes