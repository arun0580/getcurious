import React, { useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const MenuItem = ({ text = "About Us", property1, className, path }) => {
  const location = useLocation();

  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  // 🔥 Keep menu active if route matches
  useEffect(() => {
    if (location.pathname === path) {
      dispatch("active");
    } else {
      dispatch("default");
    }
  }, [location.pathname, path]);

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 justify-center relative cursor-pointer ${className}`}
      onMouseLeave={() => {
        if (location.pathname !== path) dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        if (location.pathname !== path) dispatch("mouse_enter");
      }}
    >
      <div
        className={`font-h6-medium w-fit mt-[-1.00px] tracking-[var(--h6-medium-letter-spacing)] 
          text-[length:var(--h6-medium-font-size)] [font-style:var(--h6-medium-font-style)] 
          font-[number:var(--h6-medium-font-weight)] leading-[var(--h6-medium-line-height)] relative
          ${
            state.property1 === "variant-2" || state.property1 === "active"
              ? "text-[#98bb3c]" // active/hover color
              : "text-[#1e1e1e]" // default color
          }`}
      >
        {text}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return { ...state, property1: "variant-2" };

    case "mouse_leave":
      return { ...state, property1: "default" };

    case "active":
      return { ...state, property1: "active" };

    case "default":
      return { ...state, property1: "default" };

    default:
      return state;
  }
}
