import React from "react";
import styles from "./Footer.module.css";
import { FooterProps } from "./FooterProps";
import cn from "classnames";
import { format } from "date-fns";

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </div>
  );
};

export default Footer;
