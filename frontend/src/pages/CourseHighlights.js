import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import styles from '../styles/pages/CourseHighlights.module.css';
import CourseCard from '../components/CourseCard';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import FadeInWhenVisible from '../components/Animation/FadeIn';

const CourseHighlights = ({ data }) => {
  const [loading, setLoding] = useState(true);
  const [bTechProgram, setBTechProgram] = useState([]);
  const [mTechProgram, setMTechProgram] = useState([]);
  const [mScProgram, setMScProgram] = useState([]);

  useEffect(() => {
    instance
      .get('main/course_highlights/')
      .then((res) => {
        setBTechProgram(
          res.data.filter((program) => program.program.includes('BTech'))
        );
        setMTechProgram(
          res.data.filter((program) => program.program.includes('MTech'))
        );
        setMScProgram(
          res.data.filter((program) => program.program.includes('MSc'))
        );
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <Container maxWidth="lg">
          <FadeInWhenVisible>
            <Paper
              className={styles.heading}
              style={{ background: '#012970', color: '#fff' }}
              elevation={2}
            >
              <i
                class="fas fa-user-graduate"
                style={{ margin: '0 1.2rem', padding: '0' }}
              ></i>
              Course Highlights
            </Paper>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className={styles.bTech}>
              <MenuIcon
                fontSize="large"
                style={{ margin: '0 0.5rem 0 0', paddingTop: '0rem' }}
              />
              B.TECH. PROGRAM
            </div>
          </FadeInWhenVisible>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {bTechProgram.map((branch) => {
              return (
                <Grid key={branch.title} item xs={12} sm={6} md={6} lg={6}>
                  <CourseCard data={branch} />
                </Grid>
              );
            })}
          </Grid>
          <hr className={styles.hr} style={{ marginTop: '5rem' }}></hr>
          <FadeInWhenVisible>
            <div className={styles.mTech}>
              <MenuIcon
                fontSize="large"
                style={{ margin: '0 0.5rem 0 0', paddingTop: '0rem' }}
              />
              M.TECH. PROGRAM
            </div>
          </FadeInWhenVisible>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto', marginBottom: '2rem' }}
          >
            {mTechProgram.map((discipline) => {
              return (
                <Grid key={discipline.title} item xs={12} sm={6} md={6} lg={6}>
                  <CourseCard data={discipline} />
                </Grid>
              );
            })}
          </Grid>
          <hr className={styles.hr} style={{ marginTop: '5rem' }}></hr>
          <FadeInWhenVisible>
            <div className={styles.mSc}>
              <MenuIcon
                fontSize="large"
                style={{ margin: '0 0.5rem 0 0', paddingTop: '0rem' }}
              />
              M.Sc. PROGRAM
            </div>
          </FadeInWhenVisible>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto', marginBottom: '2rem' }}
          >
            {mScProgram.map((branch) => {
              return (
                <Grid key={branch.title} item xs={12} sm={6} md={6} lg={6}>
                  <CourseCard data={branch} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default CourseHighlights;
