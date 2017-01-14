import React from 'react';
import styles from './Sidebar.css';

const Sidebar = ({ display, children }) => (
  <div className={[styles.container, getDisplayClass(display)].join(' ')}>
    {children}
  </div>
);

export default Sidebar;


function getDisplayClass(display) {
  return styles[display];
}
