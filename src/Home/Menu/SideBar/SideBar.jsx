import React from 'react';
import styles from './SideBar.css';

const SideBar = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};


export default SideBar;
