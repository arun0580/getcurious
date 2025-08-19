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
      className={`flex items-center justify-between px-6 md:px-12 py-4 w-full max-w-[1440px] mx-auto ${className}`}
    >
      {/* Logo */}
      <img
        className="h-12 w-auto object-contain"
        alt="Logo"
        src="/assets/images/logo.png"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <div className="flex items-center gap-6">
          {menuItems.map((item, idx) => (
            <MenuItem key={idx} property1="default" text={item.text} />
          ))}
        </div>
        <Button property1="default" text="Join the Movement" />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          className="p-2 rounded-lg border border-gray-300"
          onClick={() => setIsOpen(!isOpen)}
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
            className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50"
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
