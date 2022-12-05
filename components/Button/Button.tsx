import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./ButtonProps";
import cn from "classnames";

const Button = ({
  children,
  appearence,
  className,
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
    </button>
  );
};

export default Button;
