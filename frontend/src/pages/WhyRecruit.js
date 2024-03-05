import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Poster from '../components/Poster/Poster';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getLink } from '../utils/getLink';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import FadeUpWhenVisible from '../components/Animation/FadeUp';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: '2rem',
    [theme.breakpoints.down(460)]: {
      padding: 15,
    },
  },
  paper: {
    padding: '1rem',
    margin: '2rem 0',
    [theme.breakpoints.up(460)]: {
      paddingInline: 40,
    },
    width: 'auto',
    color: 'black',
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
  card: {
    width: 'auto',
    border: '3px solid',
    borderColor: '#012970',
    borderRadius: '5px',
  },
  card_content: {
    backgroundColor: 'rgb(255, 255, 255)',
    height: 290,
  },
}));

const WhyRecruit = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(true);
  const [recruitdata, setRecruitdata] = useState([]);

  useEffect(() => {
    instance
      .get('main/whyrecruitdata/')
      .then((res) => {
        setRecruitdata(res.data);
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
    console.log(instance);
  }, []);

  return (
    <div style={{ height: 'auto', width: 'auto' }}>
      {loading ? (
        <Loading />
      ) : (
        <Container maxWidth="lg">
          <FadeInWhenVisible>
            <Paper
              className={classes.heading}
              style={{ background: '#012970', color: '#fff' }}
              elevation={2}
            >
              <EqualizerIcon
                fontSize="large"
                style={{ margin: '0 1.2rem', padding: '0' }}
              />
              Why Recruit?
            </Paper>
          </FadeInWhenVisible>
          <Poster />
          <Paper className={classes.paper}>
            <Grid container spacing={5}>
              {recruitdata.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  styles={{
                    justifyContent: 'center',
                  }}
                >
                  <FadeUpWhenVisible>
                    <Card className={classes.card} raised="True">
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={item.title}
                          height="200"
                          justify-content="center"
                          image={getLink(item.img)}
                          title={item.title}
                          padding="5"
                          backgroundColor="rgb(255, 255, 255)"
                        />
                        <CardContent className={classes.card_content}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            align="center"
                            color="rgb(0,0,0)"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body3"
                            color="rgb(0,0,0)"
                            component="p"
                          >
                            {item.text}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </FadeUpWhenVisible>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      )}
    </div>
  );
};

export default WhyRecruit;
