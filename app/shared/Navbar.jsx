import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duraction: 1 }}
        className="flex items-center"
      >
        
      </motion.div>
    </nav>
  );
};

export default Navbar;
