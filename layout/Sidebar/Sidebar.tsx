import React from "react";
import Menu from "../../components/Menu/Menu";
import { SidebarProps } from "./SidebarProps";

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return <div {...props}>{<Menu />}</div>;
};

export default Sidebar;
