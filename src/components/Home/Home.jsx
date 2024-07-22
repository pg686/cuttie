import React from "react";
import { motion } from "framer-motion";
import Socials from "../../elements/Socials/Socials.jsx";
import Copy from "../../elements/Copy/Copy.jsx";
const Home = () => {
  const pcButtonVariant = {
    hidden: { opacity: 0.5, y: 450 },
    visible: {
      opacity: 1,
      y: [450, 0],
      transition: { type: "easeIn", duration: 1 },
    },
  };
  const mobileButtonVariant = {
    hidden: { opacity: 0.5,  y: 200 },
    visible: {
      opacity: 1,
      y: [200, 0],
      transition: { type: "easeIn", duration: 1 },
    },
  };
  return (
    <div className="home">
      <div className="container homeContainer">
        <div>
          <motion.h2
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            $UGLI
          </motion.h2>
        </div>
        <div className="wojakSection">
          <motion.span
            className="homeImgSpan"
            viewport={{ once: true }}
            variants={
              window.innerHeight <= 700 ? mobileButtonVariant : pcButtonVariant
            }
            initial="hidden"
            whileInView="visible"
          >
            {" "}
            <img
              src="https://uglisolana.com/images/ugliDog.png"
              className="homeImg"
            />
          </motion.span>
        </div>
        <div className="homeInfo">
          <Copy />
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Home;
