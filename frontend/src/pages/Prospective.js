import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container, Typography } from '@material-ui/core';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import FadeUpWhenVisible from '../components/Animation/FadeUp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: '2rem',
  },
  body: {
    fontSize: '1rem',
    color: 'black',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: 'auto',
    fontSize: '1rem',
    color: 'black',
  },
  text: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(460)]: {
      paddingInline: 40,
    },
    textAlign: 'left',
    width: 'auto',
    fontSize: '1rem',
    color: 'black',
  },
  table: {
    minWidth: 'auto',
    marginTop: 5,
    fontSize: '1rem',
    color: 'black',
  },
}));

export default function Prospective() {
  const classes = useStyles();
  const [windowWidth, setWindowWidth] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid style={{ marginTop: '30px' }} item xs={12}>
            <FadeInWhenVisible>
              <Paper className={classes.paper}>
                <Typography
                  component="h5"
                  variant="h5"
                  style={{ fontSize: 30 }}
                >
                  Prospective
                </Typography>
              </Paper>
            </FadeInWhenVisible>
          </Grid>
          <Grid item xs={12}>
            <FadeUpWhenVisible>
              <Paper className={classes.paper}>
                <Chart
                  width={'100%'}
                  height={windowWidth < 700 ? 'auto' : '400px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Program', 'No. of students'],
                    ['B.Tech', 121],
                    ['M.Tech', 44],
                    ['M.Sc', 51],
                  ]}
                  options={{
                    legend: 'bottom',
                    animation: {
                      duration: 1000,
                      easing: 'out',
                      startup: true,
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </Paper>
            </FadeUpWhenVisible>
          </Grid>
          <Grid item xs={12}>
            <FadeUpWhenVisible>
              <Paper className={classes.text}>
                This year we place before you for your consideration 216
                students (121 B.Tech., 44 M.Tech. and 51 M.Sc. students ) who
                are eligible for the seeking placements through the Institute.
                <TableContainer
                  style={{
                    fontSize: '1rem',
                    color: 'black',
                    marginTop: '10px',
                  }}
                  component={Paper}
                >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.body}>Program</TableCell>
                        <TableCell className={classes.body} align="left">
                          Branch
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          className={classes.body}
                          rowSpan={4}
                          component="td"
                        >
                          B.Tech
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech1">
                          Computer Science & Engineering
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech2">
                          {' '}
                          Electrical Engineering
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech3">
                          Mechanical Engineering
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          className={classes.body}
                          rowSpan={6}
                          component="td"
                        >
                          M.Tech
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech4">
                          Computer Science & Engineering
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech5">
                          {' '}
                          Electrical Engineering
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech6">
                          Mechanical Engineering
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech7">
                          Bioscience & Bioengineering
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech8">
                          Metallurgical and Materials Engineering
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          className={classes.body}
                          rowSpan={4}
                          component="td"
                        >
                          M.Sc
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech9">
                          Physics
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech10">
                          Chemistry
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.body} key="btech11">
                          Mathematics
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </FadeUpWhenVisible>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
