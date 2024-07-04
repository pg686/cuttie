import React from 'react'
import { Tweet } from 'react-twitter-widgets'
import Memes from '../Memes/Memes.jsx'
const About = () => {


  return (
        <div className="about">  
         <div className="tweetPost">
            <Tweet tweetId="1441670584190992385"/>
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