import React from 'react'
import Memes from './Memes.jsx'

const MemeList = () => {
  return (
    <div className='memes'>
      <h2 className="memeTitle">Memes</h2>
        <Memes memesArr={['1', '2', '3', '4','5', '6','7', '8', '9', '10']}/>
    </div>
  )
}

export default MemeList