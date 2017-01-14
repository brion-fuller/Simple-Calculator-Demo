import React from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

//import Menu from './Menu/Menu';
import Sidebar from './Sidebar/Sidebar';

export default ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header}>Header</header>
    <div className={styles.body}>
      <Sidebar>
        <div className={styles['sidebar-item']}>
          <Link to="dashboard">Dashboard</Link>
        </div>
        <div className={styles['sidebar-item']}>
          <Link to="calculator">Calculator</Link>
        </div>
      </Sidebar>
      <div className={styles.content}>
        {children}
      </div>
    </div>
    <footer className={styles.footer}>Footer</footer>
  </div>
);
