import React from 'react';
import styles from '../styles/components/PaperHeader.module.css';
import { Container } from '@material-ui/core';
import FadeInWhenVisible from '../components/Animation/FadeIn';

const PaperHeader = ({ data }) => {
  const Icon = data.icon;
  return (
    <Container maxWidth="lg">
      <FadeInWhenVisible>
        <div className={styles.heading} elevation={2}>
          <Icon fontSize="large" style={{ margin: '0 1.2rem', padding: '0' }} />
          {data.heading}
        </div>
      </FadeInWhenVisible>
    </Container>
  );
};

export default PaperHeader;
