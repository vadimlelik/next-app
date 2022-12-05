import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./ButtonProps";
// import ArrowIcon from "./arrow.svg";
import ArrowIcon from "./arrow.svg";

import cn from "classnames";

const Button = ({
  children,
  appearence,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.ghost]: appearence === "ghost",
        [styles.primary]: appearence === "primary",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == "down",
            [styles.left]: arrow == "left",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
