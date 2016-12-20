import React from 'react';

import styles from './Button.css';

export const Button = ({value,size,onClick}) => (
    <button className={[styles.container,styles[size]].join(' ')} onClick={() => onClick(value)}>
        {value}
    </button>
);

Button.defaultProps = {
    value: undefined,
    size:'md',
    onClick: () => {}
}