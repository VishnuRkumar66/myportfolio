import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import netflixSound from "../assets/netflix.mp3"; 

const NetflixIntro = () => {
  const [trigger, setTrigger] = useState(false);

  const handleTrigger = () => {
    setTrigger(true);
  };

  useEffect(() => {
    if (trigger) {
      const audio = new Audio(netflixSound);
      audio.play();
    }
  }, [trigger]);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      {!trigger ? (
        <motion.button
          className="text-red-600 text-5xl font-bold px-6 py-3 border-4 border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
          onClick={handleTrigger}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          CLICK
        </motion.button>
      ) : (
        <motion.div
          className="text-red-600 text-5xl font-bold "
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 2.0, opacity: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          <p>VRK</p>
        </motion.div>


      )}
    </div>
  );
};

export default NetflixIntro;
