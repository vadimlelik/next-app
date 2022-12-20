import React from "react";
import Menu from "../../components/Menu/Menu";
import { SidebarProps } from "./SidebarProps";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Logo from "./logo.svg";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />

      <div> Seacrch</div>
      <Menu />
    </div>
  );
};

export default Sidebar;
