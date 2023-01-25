import React from "react";
import {ProductProps} from "./ProductProps";
import cn from "classnames";
import styles from "./Product.module.css";

const Product = ({product,className, ...props}: ProductProps): JSX.Element => {
    return (<div className={cn(styles.Product, className)}>

        <p> {product.title}</p>
    </div>);
};

export default Product;
