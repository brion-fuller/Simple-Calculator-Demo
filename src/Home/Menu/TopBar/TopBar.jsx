import React from 'react';
import styles from './TopBar.css';

const TopBar = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default TopBar;
