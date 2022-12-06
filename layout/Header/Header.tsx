import React from "react";
import { HeaderProps } from "./HeaderProps";

const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};

export default Header;
