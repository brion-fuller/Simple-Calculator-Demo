import React from 'react';
import styles from './Calculator.css';

import Display from './Display';
import Keypad from './Keypad';

export const Calculator = () => (
    <div className={styles.container}>
        <Display />
        <Keypad />
    </div>
);
