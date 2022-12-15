import React from "react";
import Menu from "../../components/Menu/Menu";
import { SidebarProps } from "./SidebarProps";
import styles from "./Sidebar.module.css";
import cn from "classnames";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <div className={styles.logo}>Logo</div>

      <div> Seacrch</div>
      {<Menu />}
    </div>
  );
};

export default Sidebar;
