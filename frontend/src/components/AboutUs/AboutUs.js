import React from 'react';
import Container from '@material-ui/core/Container';
import styles from './AboutUs.module.css';

const AboutUs = ({ data }) => {
  const createAboutUs = () => {
    return { __html: data.content };
  };

  return (
    <React.Fragment>
      <div>
        <div
          style={{
            fontSize: 40,
            textAlign: '-webkit-center',
            justifyContent: 'center',
            display: 'flex',
            marginBottom: -10,
            marginTop: 70,
          }}
        >
          <i
            class="fa fa-info-circle"
            style={{
              marginBottom: '0.5%',
              marginTop: '0.5%',
              marginRight: '0.9%',
            }}
          ></i>
          <h2 className={styles.aboutUsTitle}>{data.title}</h2>
        </div>
        <h3>
          <hr style={{ width: '60%', marginBottom: 35 }} />
        </h3>
      </div>
      {data ? (
        <Container maxWidth="lg" className={styles.textContainer}>
          <p dangerouslySetInnerHTML={createAboutUs()} />
        </Container>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default AboutUs;
