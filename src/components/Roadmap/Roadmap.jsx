import React from "react";
import { motion } from "framer-motion";
const Roadmap = () => {
  return (
    <div className="roadmapWrapper">
      <div className="roadmap">
        <motion.h2
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scaleY: [1, 1.2, 1] }}
          transition={{ duration: 3, delay: 0 }}
        >
          Roadmap
        </motion.h2>
        <div className="roadmapList">
          <motion.div
            initial={{ scale: 1 }}
            viewport={{ once: true }}
            whileInView={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, delay: 0 }}
            className="roadMapItem"
          >
            <div className="number">1</div>
            <div className="roadmapInfo">Launch</div>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            viewport={{ once: true }}
            whileInView={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, delay: 1 }}
            className="roadMapItem"
          >
            <div className="number">2</div>
            <div className="roadmapInfo">Kill the jeets</div>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            viewport={{ once: true }}
            whileInView={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, delay: 2 }}
            className="roadMapItem"
          >
            <div className="number">3</div>
            <div className="roadmapInfo">Slay the jeets</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
