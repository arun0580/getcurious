import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItem } from "../MenuItem";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const NavBarWrapper = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { text: "About Us" },
    { text: "Your Community" },
    { text: "K12 Education" },
    { text: "Contact" },
  ];

  return (
    <nav
      className={`relative max-w-7xl mx-auto flex items-center justify-between py-4 px-6 ${className}`}
    >
      {/* Logo */}
      <img
        className="h-[60px] w-auto object-contain cursor-pointer"
        alt="Logo"
        src="/assets/images/logo.png"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2 lg:gap-10 cursor-pointer">
        {menuItems.map((item, idx) => (
          <MenuItem key={idx} property1="default" text={item.text} />
        ))}
        <Button property1="default" text="Join the Movement" />
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
            className="absolute cursor-pointer top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-3 md:hidden z-50"
          >
            {menuItems.map((item, idx) => (
              <MenuItem key={idx} property1="default" text={item.text} />
            ))}
            <Button property1="default" text="Join the Movement" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
