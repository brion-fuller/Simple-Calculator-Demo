import React from 'react';
import styles from './Menu.css';

import SideBar from './SideBar/SideBar';
import TopBar from './TopBar/TopBar';

const Menu = ({ children }) => (
  <div className={styles.container}>
    <SideBar>
      <a>Item 1</a>
      <a>Item 2</a>
      <a>Item 3</a>
    </SideBar>
    <TopBar>
      <a>Item 1</a>
      <a>Item 2</a>
      <a>Item 3</a>
    </TopBar>
    <div>{children}</div>
  </div>
);

export default Menu;
