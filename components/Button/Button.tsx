import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./ButtonProps";
import cn from "classnames";

const Button = ({ children, appearence }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.ghost]: appearence === "ghost",
        [styles.primary]: appearence === "primary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
