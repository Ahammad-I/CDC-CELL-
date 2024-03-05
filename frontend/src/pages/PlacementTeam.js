import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import ContactCard from '../components/ContactCard';
import Paper from '@material-ui/core/Paper';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/pages/PlacementTeam.module.css';
import { Container } from '@material-ui/core';
import FadeInWhenVisible from '../components/Animation/FadeIn';

const PlacementTeam = () => {
  const [loading, setLoding] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const designations = [
      'President',
      'Vice-President',
      'Senior Assistant',
      'Student Co-ordinator',
      'Internship Co-ordinator',
      'Departmental Representative',
      'Web Development Team',
      'Representative',
    ];

    instance
      .get('main/core_team_contacts/')
      .then((res) => {
        var placementTeam = [];
        designations.forEach((designation) => {
          placementTeam.push(
            res.data.filter(
              (member) => member.designation.designation === designation
            )
          );
        });
        setData(placementTeam);
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
                Placement Team
              </Paper>
            </FadeInWhenVisible>
          </Container>
          {data.map((dt) => {
            return (
              <div>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={5}
                  style={{ width: '100%', margin: '2rem auto 2rem auto' }}
                >
                  {dt.map((member) => {
                    return (
                      <Grid
                        key={member.user.email}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                      >
                        <ContactCard data={member} />
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default PlacementTeam;
