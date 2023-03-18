import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duraction: 1 }}
        className="flex items-center"
      >
        <Link href={'/'} className="text-lg font-medium mytext dropshadow-lg mr-5">
          About
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
