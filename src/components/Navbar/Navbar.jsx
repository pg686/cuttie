import React from 'react';
import {useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {FaBars, FaTimes } from 'react-icons/fa';
import  {Link} from "react-scroll";
const Navbar = () => {
    const navRef = useRef();
    const headerRef = useRef();

    const [top, setTop] = useState(true);
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
      const scrollHandler = () => {
        setTop(window.pageYOffset <= 50 || window.innerWidth <= 1100)
    };
    window.addEventListener('scroll', scrollHandler);
    
    scrollHandler(); 


    
    return () => {
        window.removeEventListener('scroll', scrollHandler);
    }

    }, [top]);


    useEffect(() => {
      setTimeout(() => {
        setShowNav(true);
      }, 2000);
     
      
    }, []);
    useEffect(() => {
      if(showNav){

      navRef.current.classList.toggle("navLoad");
      }
      
    }, [showNav])

    console.log(top, "settop")
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");    
    }

    const navButton =  {
      visible: {
        scaleX: [1, 0.8, 1],
        scaleY: [1, 1.2, 1],
        transition: {
           duration: 1,
           ease: "easeInOut",

           delay: 0
        }
    }
    };
  return (
   <header className={top ? "header" :  "header blurry"} ref={headerRef}>
    <div className='slayBanner'>
      <div className='slaySlide'>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
      </div>
      <div className='slaySlide'>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
<span>$ugli</span>
<span>★</span>
      </div>
    </div>
    <div className="navContainer">
   <Link className="logoWrapper"  onClick={showNavbar}   spy={true} smooth={true} offset={0} duration={500} to="home"> <img src="/images/logo.png" className="logo"  /> <span className="logoText"></span></Link>
   <nav className='navbar' ref={navRef}>
   <motion.ul>
    <motion.li variants={navButton} animate="visible" className="strong-hover-shake"><Link  onClick={showNavbar}  activeClass="active" className="page-scroll navLinks" offset={0} spy={true} smooth={true} style={{'--i':0}} duration={200} to="home">home</Link></motion.li>
    <motion.li variants={navButton} animate="visible" className="strong-hover-shake"><Link  onClick={showNavbar}  activeClass="active" className="page-scroll navLinks" offset={0} spy={true} smooth={true} style={{'--i':0}} duration={200} to="about">about</Link></motion.li>
    <motion.li variants={navButton} animate="visible" className="strong-hover-shake"><Link  onClick={showNavbar}  activeClass="active" className="page-scroll navLinks" offset={0} spy={true} smooth={true} style={{'--i':0}} duration={200} to="memes">memes</Link></motion.li>
    <motion.li variants={navButton} animate="visible" className="strong-hover-shake"><Link  onClick={showNavbar}  activeClass="active" className="page-scroll navLinks" offset={-80} spy={true} smooth={true} style={{'--i':0}} duration={200} to="tokenomics">tokenomics</Link></motion.li>
    <motion.li variants={navButton} animate="visible" className="strong-hover-shake"><Link  onClick={showNavbar}  activeClass="active" className="page-scroll navLinks" offset={-80} spy={true} smooth={true} style={{'--i':0}} duration={200}>roadmap</Link></motion.li>
   </motion.ul>
   </nav>
   <div className="buySlay">
   <a href="https://jup.ag/swap/SOL-ECutGg12PNhqhkvnH1s1FcuXgCDzKDNhSf5aLtANioR7" className="button">Buy $SLAY</a>

   <button className='nav-btn' onClick={showNavbar}>
   <FaBars />
   
   </button>
   </div>
   </div>
   </header>
  )
}

export default Navbar