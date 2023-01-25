import React from "react";
import {ProductProps} from "./ProductProps";
import cn from "classnames";
import styles from "./Product.module.css";
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";

const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
        return (<Card className={cn(styles.product)}>
            <div className={styles.logo}>
                <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/>
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {product.price}
            </div>
            <div className={styles.credit}>{product.credit}</div>
            <div className={styles.rating}>
                <Rating raiting={product.reviewAvg ?? product.initialRating}/>
            </div>
            <div className={styles.tags}>
                {product.categories.map((c) => (<Tag key={c} className={styles.category} color='ghost'>{c}</Tag>))}
            </div>
            <div className={styles.priceTitle}> {product.price}</div>
            <div className={styles.creditTitle}> {product.credit}</div>
            <div className={styles.rateTitle}> {product.reviewCount} Отзывов</div>
        </Card>);
    }
;

export default Product;
