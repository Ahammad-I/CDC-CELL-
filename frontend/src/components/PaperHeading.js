import React from 'react';
import styles from '../styles/components/PaperHeading.module.css';

const PaperHeading = ({ data }) => {
  const Icon = data.icon;
  return (
    <div className={styles.heading} elevation={2}>
      <Icon fontSize="large" style={{ margin: '0 1.2rem', padding: '0' }} />
      {data.heading}
    </div>
  );
};

export default PaperHeading;
