import React from 'react';

import styles from './Display.css';

export const Display = ({value}) => (
    <div className={styles.container}>
        {value}&nbsp;
    </div>
);

