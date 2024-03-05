import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Loading from '../components/Loading';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import FadeUpBigDataWhenVisible from '../components/Animation/FadeUpBigData';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '1rem',
    margin: '2rem 0',
    [theme.breakpoints.up(460)]: {
      paddingInline: 40,
    },
    width: 'auto',
    color: 'rgb(0,0,0)',
  },
  text: {
    color: 'rgb(0,0,0)',
    fontsize: '1rem',
  },
  heading: {
    fontSize: '1.8rem',
    color: '#fff',
    backgroundColor: '#012970',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '6rem 0rem 2rem 0rem',
    padding: '1rem',
  },
}));

const ChairmanMessage = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(true);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    instance
      .get('main/navbar_suboptions/')
      .then((res) => {
        setMessage(
          res.data.filter((subOption) =>
            subOption.title.includes("Chairman's Message")
          )[0]
        );
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  const createMessage = () => {
    return { __html: message.description };
  };

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container maxWidth="lg">
            <FadeInWhenVisible>
              <Paper
                className={classes.heading}
                style={{ background: '#012970', color: '#fff' }}
                elevation={2}
              >
                <i
                  class="fas fa-comment"
                  style={{ margin: '0 1.2rem', padding: '0' }}
                ></i>
                Chairman's Message
              </Paper>
            </FadeInWhenVisible>
            <FadeUpBigDataWhenVisible>
              <Paper className={classes.paper}>
                {message ? (
                  <p dangerouslySetInnerHTML={createMessage()} />
                ) : (
                  <p>Coming soon...</p>
                )}
              </Paper>
            </FadeUpBigDataWhenVisible>
          </Container>
        </>
      )}
    </div>
  );
};

export default ChairmanMessage;
