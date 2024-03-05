import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import instance from '../api/axios';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import FadeUpBigDataWhenVisible from '../components/Animation/FadeUpBigData';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: '2rem',
    [theme.breakpoints.down(460)]: {
      padding: 2,
    },
  },
  paper: {
    padding: theme.spacing(2),
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
    padding: '1rem',
  },
}));
const AboutUs = () => {
  const classes = useStyles();
  const [aboutText, setAboutText] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    instance
      .get('main/about_us/')
      .then((res) => {
        // console.log(res);
        setAboutText(res.data[0].content);
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);
  const createMessage = () => {
    return { __html: aboutText };
  };

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
              <Grid style={{ marginTop: '30px' }} item xs={12}>
                <FadeInWhenVisible>
                  <Paper
                    className={classes.heading}
                    style={{ background: '#012970', color: '#fff' }}
                    elevation={2}
                  >
                    <i
                      class="fa fa-info-circle"
                      style={{ margin: '0 1.2rem', padding: '6px' }}
                    ></i>
                    About Us
                  </Paper>
                </FadeInWhenVisible>
              </Grid>
              <Grid item xs={12}>
                <FadeUpBigDataWhenVisible>
                  <Paper className={classes.paper}>
                    {aboutText ? (
                      <p
                        dangerouslySetInnerHTML={createMessage()}
                        className={classes.text}
                      />
                    ) : (
                      <p>Coming soon...</p>
                    )}
                  </Paper>
                </FadeUpBigDataWhenVisible>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default AboutUs;
