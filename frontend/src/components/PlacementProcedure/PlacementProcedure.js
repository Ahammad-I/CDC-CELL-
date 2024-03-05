import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import StarsIcon from '@material-ui/icons/Stars';
import { makeStyles } from '@material-ui/core/styles';
import FadeInWhenVisible from '../Animation/FadeIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: '2rem',
    [theme.breakpoints.down(460)]: {
      padding: 25,
      overflowX: 'hidden',
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: 'auto',
    fontSize: '1rem',
    color: 'black',
    textAlign: 'center',
  },
  card: {
    fontSize: '1rem',
    color: 'black',
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

const IconStyle = {
  background: '#1d1642',
  color: 'white',
  fontWeight: 800,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  fontSize: 'x-large',
};

const PlacementProcedureComponent = () => {
  const classes = useStyles();
  return (
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
                  class="fas fa-file-alt"
                  style={{ margin: '0 1.2rem', padding: '0' }}
                ></i>
                Placement Procedure
              </Paper>
            </FadeInWhenVisible>
          </Grid>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={IconStyle}
              icon={1}
            >
              <p className={classes.card}>
                Career Development Cell reaches out to various prestigious firms
                notifying that IIT Jodhpur is open for hiring.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={IconStyle}
              icon={2}
            >
              <p className={classes.card}>
                Companies interested reach out CDC with the details CDC needs
                about the roles extended by the company.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={IconStyle}
              icon={3}
            >
              <p className={classes.card}>
                Details of eligible candidates who are interested for the role
                will be made available to interested companies. Company can
                provide insight to students with their pre-placement talks.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={IconStyle}
              icon={4}
            >
              <p className={classes.card}>
                Students go through screening tests mandated by the company.
                Shortlisted students move forward in the company’s selection
                process.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={IconStyle}
              icon={5}
            >
              <p className={classes.card}>
                CDC notifies the companies with the feasible dates and schedules
                hiring process after finalising the dates.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={IconStyle}
              icon={6}
            >
              <p className={classes.card}>
                Companies provides the final list of the selected students. CDC
                ensuring that all ends are met, will request for feedback to
                improvise the expereince.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<StarsIcon />}
            ></VerticalTimelineElement>
          </VerticalTimeline>
        </Grid>
      </Container>
    </>
  );
};

export default PlacementProcedureComponent;
