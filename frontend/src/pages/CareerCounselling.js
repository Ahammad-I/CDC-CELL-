import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import C3MemberCard from '../components/C3MemberCard';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/pages/PlacementTeam.module.css';
import { Container } from '@material-ui/core';
import FadeInWhenVisible from '../components/Animation/FadeIn';

const CareerCounselling = () => {
  const [loading, setLoding] = useState(true);
  const [chairman, setChairman] = useState([]);
  const [facultyIncharge, setFacultyIncharge] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    instance
      .get('main/career_committee/')
      .then((res) => {
        setChairman(
          res.data.filter((member) =>
            member.designation.designation.includes('Chairman')
          )
        );
        setFacultyIncharge(
          res.data.filter((member) =>
            member.designation.designation.includes('Faculty Incharge')
          )
        );
        setMembers(
          res.data.filter((member) =>
            member.designation.designation.includes('Member')
          )
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
        <>
          <Container maxWidth="lg">
            <FadeInWhenVisible>
              <Paper
                className={styles.heading}
                style={{ background: '#012970', color: '#fff' }}
                elevation={2}
              >
                <i
                  class="fas fa-users"
                  style={{ margin: '0 1.2rem', padding: '0' }}
                ></i>
                Career Counselling Committee
              </Paper>
            </FadeInWhenVisible>
          </Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {chairman.map((member) => {
              return (
                <Grid key={member.email} item xs={12} sm={6} md={4} lg={3}>
                  <C3MemberCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {facultyIncharge.map((member) => {
              return (
                <Grid key={member.email} item xs={12} sm={6} md={4} lg={3}>
                  <C3MemberCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto', marginBottom: '2rem' }}
          >
            {members.map((member) => {
              return (
                <Grid key={member.email} item xs={12} sm={6} md={4} lg={3}>
                  <C3MemberCard data={member} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </div>
  );
};

export default CareerCounselling;
