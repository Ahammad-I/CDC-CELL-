import React, { useState, useEffect } from 'react';
import instance from '../../api/axios';
import Paper from '@material-ui/core/Paper';
import styles from '../../styles/pages/Brochure.module.css';
import { Container } from '@material-ui/core';
import { getLink } from '../../utils/getLink';
const Poster = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    instance
      .get('main/navbar_suboptions?search=Poster')
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container maxWidth="lg">
      {data ? (
        <Paper
          elevation={0}
          className={styles.jaf}
          style={{ borderRadius: '20px' }}
        >
          <div className={styles.iframe} style={{ width: '90%' }}>
            <iframe
              src={`https://docs.google.com/gview?url=${getLink(
                data['file']
              )}&embedded=true#view=fitH`}
              title="Poster"
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
            />
          </div>
        </Paper>
      ) : (
        ''
      )}
    </Container>
  );
};

export default Poster;
