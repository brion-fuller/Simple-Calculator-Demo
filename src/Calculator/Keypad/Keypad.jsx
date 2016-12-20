import React from 'react';
import styles from './Keypad.css';

import { Button } from './Button';

export const Keypad = ({numberPress,operationPress,evalPress,clearPress}) => (
    <div className={styles.container}>
        <div className={styles.row}>
            <Button value={1} onClick={() => numberPress(1)}/>
            <Button value={2} onClick={() => numberPress(2)}/>
            <Button value={3} onClick={() => numberPress(3)}/>
            <Button value={'+'} onClick={() => operationPress('+')}/>
            <Button value={'÷'} onClick={() => operationPress('/')}/>
        </div>
        <div className={styles.row}>
            <Button value={4} onClick={() => numberPress(4)}/>
            <Button value={5} onClick={() => numberPress(5)}/>
            <Button value={6} onClick={() => numberPress(6)}/>
            <Button value={'-'} onClick={() => operationPress('-')}/>
            <Button value={'x'} onClick={() => operationPress('*')}/>
        </div>
        <div className={styles.row}>
            <Button value={7} onClick={() => numberPress(7)}/>
            <Button value={8} onClick={() => numberPress(8)}/>
            <Button value={9} onClick={() => numberPress(9)}/>
            <Button value={'-/+'} onClick={() => clearPress('-/+')}/>
            <Button value={'CE'} onClick={() => clearPress('ce')}/>
        </div>
        <div className={styles.row}>
            <Button size={'lg'} value={0} onClick={() => numberPress(0)}/>
            <Button value={'.'} onClick={() => numberPress('.')}/>
            <Button size={'lg'} value={'='} onClick={() => evalPress('=')}/>
        </div>
    </div>
);

