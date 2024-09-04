import { div } from "framer-motion/client";
import React from "react";
import { ButtonProps } from "../lib/definitions";

const Button = ({ type, label, icon: Icon, variant }: ButtonProps) => {
  return (
    <button className={`flex gap-2 items-center ${variant}`}>
      {label}
      {Icon && <Icon className="text-lg" />}
    </button>
  );
};

export default Button;
