import { AnimatePresence, motion } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { SiInstagram, SiTiktok } from "react-icons/si";

import { useState } from "react";

const LinkList = () => {
  const activeStyle = "text-black mx-2";
  const inactiveStyle = "opacity-[50%] mx-2 hover:opacity-100";
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        to="/"
      >
        ACCUEIL
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        to="/shop"
      >
        SHOP
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        to="/bookings"
      >
        BOOKING
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        to="/info"
      >
        INFO
      </NavLink>
    </>
  );
};

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const dropIn = {
    hidden: {
      x: "100vh",
    },
    visible: {
      x: "0",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: "100vh",
    },
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          MATRNAUD
        </Link>
        <div className="hidden md:flex text-[14px] regular">
          <LinkList />
        </div>

        <IoMenu
          className="md:hidden text-[24px]"
          onClick={() => setSidebarOpen(true)}
        />
      </div>
      <AnimatePresence initial={false} mode="wait">
        {sidebarOpen && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="sidebar"
          >
            <div className="flex items-center h-[8%] px-5">
              <IoClose
                className="text-[24px] ml-auto"
                onClick={() => setSidebarOpen(false)}
              />
            </div>
            <div className="flex flex-col regular text-[14px] px-5">
              <LinkList />
              <div className="flex items-center m-2">
                <a
                  className="mr-2 opacity-[50%] hover:opacity-100"
                  href="https://www.instagram.com/matrnaud"
                >
                  <SiInstagram />
                </a>
                <a
                  className="opacity-[50%] hover:opacity-100"
                  href="https://www.tiktok.com/@matiasrnaud"
                >
                  <SiTiktok />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
