import React from "react";
import styles from "./Footer.module.css";
import { FooterProps } from "./FooterProps";

const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};

export default Footer;
