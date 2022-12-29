import React from 'react';
import {InputProps} from "./InputProps";
import cn from 'classnames';
import styles from './Input.module.css';

const Input = ({className, ...props}: InputProps): JSX.Element => (
    <input className={cn(className, styles.input)} {...props}/>
);

export default Input;