import React, {useState} from "react";
import {ProductProps} from "./ProductProps";
import cn from "classnames";
import styles from "./Product.module.css";
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import {declOfNum, priceRu} from "../../helpers/helpers";
import Review from "../Review/Review";

const Product = ({product, className, ...props}: ProductProps): JSX.Element => {

    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

    return (
        <>
            <Card className={cn(styles.product)}>
                <div className={styles.logo}>
                    <img
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && (
                        <Tag className={styles.oldPrice} color="green">
                            {priceRu(product.price - product.oldPrice)}
                        </Tag>
                    )}
                </div>
                <div className={styles.credit}>{product.credit}</div>
                <div className={styles.rating}>
                    <Rating
                        raiting={product.reviewAvg ?? product.initialRating}
                    />
                </div>
                <div className={styles.tags}>
                    {product.categories.map((c) => (
                        <Tag key={c} className={styles.category} color="ghost">
                            {c}
                        </Tag>
                    ))}
                </div>
                <div className={styles.priceTitle}> {product.price}</div>
                <div className={styles.creditTitle}> {product.credit}</div>
                <div className={styles.rateTitle}>
                    {declOfNum(product.reviewCount, [
                        "отзыв",
                        "отзыва",
                        "отзывов",
                    ])}
                </div>
            </Card>
            <Card
                color="blue"
                className={cn(styles.reviews, {
                    [styles.opened]: isReviewOpened,
                    [styles.closed]: !isReviewOpened,
                })}
            >
                {product.reviews.map((r) => (
                    <Review key={r._id} review={r}/>
                ))}
            </Card>
        </>
    );
};
export default Product;
