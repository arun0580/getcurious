/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const Button = ({
  text = "Join the  Movement",
  property1,
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-2.5 px-6 py-4 rounded-[40px] justify-center relative ${
        state.property1 === "variant-2" ? "bg-gold-600" : "bg-[#98bb3c]"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="font-h6-medium w-fit mt-[-1.00px] tracking-[var(--h6-medium-letter-spacing)] text-[length:var(--h6-medium-font-size)] [font-style:var(--h6-medium-font-style)] text-white font-[number:var(--h6-medium-font-weight)] leading-[var(--h6-medium-line-height)] relative">
        {text}
      </div>
    </button>
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
