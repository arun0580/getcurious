import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItem } from "../MenuItem";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const NavBarWrapper = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // get current route

  const menuItems = [
    { text: "About Us", path: "/about" },
    { text: "K12 Education", path: "/k12" },
    { text: "Your Community", path: "/community" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`relative max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12 ${className}`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          className="h-[60px] w-auto object-contain cursor-pointer"
          alt="Logo"
          src="/assets/images/logo.png"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2 lg:gap-10">
        {menuItems.map((item, idx) => (
          <Link key={idx} to={item.path}>
            <MenuItem property1="default" text={item.text} path={item.path} />
          </Link>
        ))}
        <Link to="/join">
          <Button property1="default" text="Join the Movement" />
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          className="p-2 rounded-lg border border-gray-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-3 md:hidden z-50"
          >
            {menuItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={idx} to={item.path} onClick={() => setIsOpen(false)}>
                  <MenuItem
                    property1={isActive ? "active" : "default"}
                    text={item.text}
                  />
                </Link>
              );
            })}
            <Link to="/join" onClick={() => setIsOpen(false)}>
              <Button property1="default" text="Join the Movement" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
