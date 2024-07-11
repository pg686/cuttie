import React from "react";
import Memes from "./Memes.jsx";
import { motion, useAnimation } from "framer-motion";

const MemeList = () => {
  return (
    <div className="memes">
      <motion.h2
        className="memeTitle"
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, scaleY: [1, 1.2, 1], y: [0, -50, 0] }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Memes
      </motion.h2>
      <Memes
        memesArr={[
          { data: "1", type: "img" },
          { data: "2", type: "img" },
          { data: "3", type: "img" },
          { data: "4", type: "img" },
          { data: "animation5", type: "gif" },
          { data: "5", type: "img" },
          { data: "6", type: "img" },
          { data: "animation3", type: "gif" },
          { data: "7", type: "img" },
          { data: "8", type: "img" },
          { data: "9", type: "img" },
          { data: "10", type: "img" },
          { data: "animation1", type: "gif" },
          { data: "animation2", type: "gif" },
        ]}
      />
    </div>
  );
};

export default MemeList;
