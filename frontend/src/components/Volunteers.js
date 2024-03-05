import React from 'react';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import styles from '../styles/components/Volunteers.module.css';
import Grid from '@material-ui/core/Grid';
import FadeUpWhenVisible from './Animation/FadeUp';
import FadeInWhenVisible from './Animation/FadeIn';
const Volunteers = (props) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      style={{
        textAlign: 'center',
      }}
    >
      <FadeInWhenVisible>
        <b className={styles.year}>{props.year}</b>
      </FadeInWhenVisible>
      {props.data.map((volunteer) => {
        return (
          <FadeUpWhenVisible>
            <Paper className={styles.volunteer} elevation={2}>
              <a
                href={`mailto:${volunteer.email}`}
                className={styles.volunteerEmail}
              >
                {`${volunteer.name} (${volunteer.program_branch.abbreviation})`}
                <EmailIcon style={{ margin: '0 0.5rem' }} />
              </a>
            </Paper>
          </FadeUpWhenVisible>
        );
      })}
    </Grid>
  );
};

export default Volunteers;
