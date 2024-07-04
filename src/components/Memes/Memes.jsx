import React from 'react'
const Memes = ({memesArr, isReversed}) => {

  return (
    <div>
        <div className='memeWrapper'>
          <div className="wrapper">
        <div className='marquee'>
          <div className={isReversed ? "marqueeGroupReverse" : "marqueeGroup"}>
            {memesArr.map(meme => <div className="imageGroup"><img src={`/images/${meme}.webp`} loading='lazy' fetchPriority='high' decoding='async' className='sliderImg'/></div>)}
            </div>
            <div className={isReversed ? "marqueeGroupReverse" : "marqueeGroup"}>
            {memesArr.map(meme => <div className="imageGroup"><img src={`/images/${meme}.webp`}  loading='lazy'  fetchPriority='high'  decoding='async' className='sliderImg'/></div>)}
            </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Memes