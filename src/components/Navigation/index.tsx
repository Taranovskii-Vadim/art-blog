import { useState } from "react";
import { motion } from "framer-motion";

import { useMediaQuery } from "../../hooks";

import { navMotion, itemMotion } from "./constants";

const Navigation = () => {
  const [toggled, setToggled] = useState(false);

  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className="relative flex justify-between items-center pt-12 font-medium">
      <a href="/">
        <img src="/logo.png" alt="logo" className="max-h-10 z-50" />
      </a>
      {matches && (
        <div className="flex gap-12">
          <a href="/">Home</a>
          <a href="/posts">Posts</a>
        </div>
      )}
      {!matches && (
        <div
          className="space-y-1.5 cursor-pointer z-50"
          onClick={() => setToggled((prev) => !prev)}
        >
          <motion.span
            className="block h-0.5 w-8 bg-black"
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          ></motion.span>
          <motion.span
            className="block h-0.5 w-6 bg-black"
            animate={{ width: toggled ? 0 : 24 }}
          ></motion.span>
          <motion.span
            className="block h-0.5 w-4 bg-black"
            animate={{
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
              rotateZ: toggled ? -45 : 0,
            }}
          ></motion.span>
        </div>
      )}
      {toggled && !matches && (
        <div className="fixed bg-white bottom-0 left-0 w-full h-screen flex items-center justify-center z-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navMotion}
            className="flex flex-col gap-24 text-lg text-center"
          >
            <motion.a variants={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/posts">
              Posts
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
