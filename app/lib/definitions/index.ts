import { IconType } from "react-icons";

export type ButtonProps = {
  type: "submit" | "button";
  label: string;
  icon?: IconType;
  variant: string;
};
