import React, {useState} from 'react';
import {SearchProps} from "./SearchProps";
import styles from './Search.module.css';
import cn from "classnames";
import Input from "../Input/Input";
import Button from "../Button/Button";
import GlassIcon from './glass.svg';

const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    return <div className={cn(className, styles.search)} {...props}>

        <Input className={styles.input}
               placeholder='Поиск...'
               value={search}
               onChange={(e) => setSearch(e.target.value)}
        />

        <Button appearence='ghost'>
            <GlassIcon/>
        </Button>

    </div>;
};

export default Search;