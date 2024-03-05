import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CDActivityCard from '../components/CDActivityCard';
import FadeInWhenVisible from '../components/Animation/FadeIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: 10,
    [theme.breakpoints.down(460)]: {
      padding: 15,
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: 'auto',
    fontSize: '1rem',
    color: 'black',
  },
  paperother: {
    width: 'auto',
    fontSize: '1rem',
    color: 'black',
  },
  Hroot: {
    maxWidth: 345,
    margin: 10,
    float: 'left',
    minWidth: 'auto',
  },
  media: {
    height: 140,
  },
  Awrapper: {
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  actionArea: {
    minHeight: '100%',
    flexFlow: 'column-reverse',
  },
  upcomingHead: {
    fontSize: '1.8rem',
    color: '#012970',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pastHead: {
    fontSize: '1.8rem',
    color: '#012970',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  hr: {
    margin: '1rem auto',
    width: '20rem',
    border: '0',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  },
}));

const CDActivities = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(true);
  const [Upcoming, setUpcoming] = useState([]);
  const [Past, setPast] = useState([]);

  useEffect(() => {
    instance
      .get('main/career_development_activity/')
      .then((res) => {
        setUpcoming(
          res.data.filter((subOption) =>
            subOption.category.includes('Upcoming')
          )
        );
        setPast(
          res.data.filter((subOption) => subOption.category.includes('Past'))
        );
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  const getUpcoming = () => {
    let Upcoming_list = [];

    Upcoming.map((Upcoming_Obj) => {
      return Upcoming_list.push(
        <CDActivityCard key={Upcoming_Obj.title} data={Upcoming_Obj} />
      );
    });

    return Upcoming_list;
  };

  const getPast = () => {
    let Past_list = [];

    Past.map((Past_Obj) => {
      return Past_list.push(
        <CDActivityCard key={Past_Obj.title} data={Past_Obj} />
      );
    });

    return Past_list;
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
                      class="fas fa-users"
                      style={{ margin: '0 1.2rem', padding: '0' }}
                    ></i>
                    Career Development Activities
                  </Paper>
                </FadeInWhenVisible>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.upcomingHead}>
                  <MenuIcon
                    fontSize="large"
                    style={{ margin: '0 0.5rem', paddingTop: '0rem' }}
                  />
                  Upcoming Events
                </div>
                <hr className={classes.hr}></hr>
                <Container maxWidth="lg" className={classes.Awrapper}>
                  {Upcoming === [] ? ' ' : getUpcoming()}
                </Container>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <hr className={classes.hr}></hr>
                <div className={classes.pastHead}>
                  <MenuIcon
                    fontSize="large"
                    style={{ margin: '0 0.5rem', paddingTop: '0rem' }}
                  />
                  Past Events
                </div>
                <hr className={classes.hr}></hr>
                <Container maxWidth="lg" className={classes.Awrapper}>
                  {Past === [] ? ' ' : getPast()}
                </Container>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};
export default CDActivities;
