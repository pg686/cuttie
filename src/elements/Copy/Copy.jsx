import React from "react";
import './Copy.modules.css';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { FaRegCopy } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const Copy = ({animation}) => {
    const value = 'FaPMvVNbD441DXUQ7iqoftnp7VrEw5aQ7o3Xp2xDpump';

  return (
    <CopyToClipboard text={value} className="tooltip">
       
    <motion.button 
    variants={animation}
    initial="initial"
    whileInView="animate" 
    viewport={ { once: true }}
    data-tooltip-id="my-tooltip" className="btnContract" ><div className="copy"><FaRegCopy/>{value}</div>
   
   <ReactTooltip id="my-tooltip"   globalEventOff="hover" events={['click']} content="Contract address copied!"/>
       </motion.button> 
  </CopyToClipboard>
  )
}

export default Copy;