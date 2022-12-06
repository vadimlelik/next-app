import React from "react";
import { SidebarProps } from "./SidebarProps";

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
