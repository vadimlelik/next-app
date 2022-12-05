import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "ghost" | "grey" | "primary" | "green" | "red";
  href?: string;
  children: ReactNode;
  size?: "small" | "medium";
}
