import React from 'react';
import {TextAreaProps} from "./TextAreaProps";
import cn from 'classnames';
import styles from './TextArea.module.css';

const TextArea = ({className, ...props}: TextAreaProps): JSX.Element => (
    <textarea className={cn(className, styles.textArea)} {...props}/>
);

export default TextArea;