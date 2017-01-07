import React from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

//import Menu from './Menu/Menu';

export default ({ children }) => (
  <div className={styles.container}>
    <div className={styles.body}>
      <ol>
        <Link to="dashboard">Dashboard</Link>
        <Link to="calculator">Calculator</Link>
      </ol>
    </div>
    <div className={styles.sidebar}>Side Bar</div>
    <div className={styles.ads}>Ads</div>
  </div>
);
