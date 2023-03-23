"use client";

import React, { useState} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ socials }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duraction: 1 }}
        className="flex items-center"
      >
        <Link href={'/'} className="text-lg font-medium mytext dropshadow-lg mr-5">
          Home
        </Link>
        {socials.map((social, index) => (
          <SocialIcon
            key={index}
            url={social.url}
            fgColor="white"
            bgColor="transparent"
            className="headerIcon"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex items-center text-white cursor-pointer space-x-5"
      >
        <a href="#contact" className="block">
          <SocialIcon
            network="email"
            fgColor="white"
            bgColor="transparent"
            className="headerIcon"
          />
        </a>
        <div onClick={() => setShowSidebar(true)} className="flex">
          <AiOutlineMenu className="headerIcon" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
