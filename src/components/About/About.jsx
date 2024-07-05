import React, { useRef } from 'react'

import { useIsVisible } from 'react-is-visible'
const About = () => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)
  return (
        <div className="about">  
         <div className="tweetPost">
         <a href='https://x.com/thegallowboob/status/1441670584190992385'><img src="/images/tweeter.png" alt="" className="tweetImg" /></a>
        </div>
        <div className='aboutContainer'>
        <div className='aboutSection'>
            <h2>About</h2>
        <div className="aboutInfo">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
        </div>
        </div>
  )
}

export default About