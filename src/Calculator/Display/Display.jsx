import React from 'react';

import styles from './Display.css';

export default ({ value }) => (
  <div className={styles.container}>
    {value}&nbsp;
  </div>
);

