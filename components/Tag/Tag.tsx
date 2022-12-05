import React from "react";
import { TagProps } from "./TagProps";
import cn from "classnames";
import styles from "./Tag.module.css";

const Tag = ({
  children,
  color = "ghost",
  size = "medium",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.ghost]: color === "ghost",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <div>{children}</div>}
    </div>
  );
};

export default Tag;
