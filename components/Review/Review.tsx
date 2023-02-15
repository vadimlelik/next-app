import React from "react";
import { PProps } from "./PProps";
import cn from "classnames";
import styles from "./P.module.css";

const P = ({
  size = "middle",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size === "small",
        [styles.middle]: size === "middle",
        [styles.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
