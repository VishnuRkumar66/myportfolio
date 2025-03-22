import React, { useState } from "react";
import { motion } from "framer-motion";
import netflixSound from "../assets/netflix.mp3";

const NetflixIntro = ({ setStart }) => {
  const [trigger, setTrigger] = useState(false);

  const handleTrigger = () => {
    setTrigger(true);

    const audio = new Audio(netflixSound);
    audio.play();

    const intervalId = setTimeout(() => {
      setStart(true);
    }, 5000);

    return () => clearTimeout(intervalId);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {!trigger ? (
        <motion.button
          className="text-red-600 text-5xl font-bold px-6 py-3 border-4 border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
          onClick={handleTrigger}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>click me</p>
        </motion.button>
      ) : (
        <motion.div
          className="text-red-600 text-5xl font-bold "
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 3.0, opacity: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          <p>VRK</p>
        </motion.div>
      )}
    </div>
  );
};

export default NetflixIntro;
