import React from "react";
import {SortEnum, SortProps} from "./SortProps";
import SortIcon from './Sort.svg';
import cn from 'classnames';
import styles from './Sort.module.css';


const Sort = ({setSort, sort, className, ...props}: SortProps): JSX.Element => {
    return <div className={cn(styles.sort, className, {})} {...props}>

            <span onClick={() => setSort(SortEnum.Rating)} className={cn({
                [styles.active]: sort == SortEnum.Rating
            })}>
                <SortIcon className={styles.sortIcon}/> по рейтингу
            </span>

        <span onClick={() => setSort(SortEnum.Price)} className={cn({
            [styles.active]: sort == SortEnum.Price
        })}>
               <SortIcon className={styles.sortIcon}/> по цене
        </span>
    </div>;
};


export default Sort;
