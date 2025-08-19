/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const MenuItem = ({ text = "About Us", property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 justify-center relative ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`font-h6-medium w-fit mt-[-1.00px] tracking-[var(--h6-medium-letter-spacing)] text-[length:var(--h6-medium-font-size)] [font-style:var(--h6-medium-font-style)] font-[number:var(--h6-medium-font-weight)] leading-[var(--h6-medium-line-height)] relative ${
          state.property1 === "variant-2" ? "text-[#98bb3c]" : "text-[#1e1e1e]"
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
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}
