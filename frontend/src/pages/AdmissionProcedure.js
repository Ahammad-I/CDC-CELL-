import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import FadeUpWhenVisible from '../components/Animation/FadeUp';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import admission from '../assets/admission.jpg';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 'auto',
    maxWidth: '100%',
    border: 'black',
  },
  tablewrapper: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'center',
  },
  paper: {
    padding: '1rem',
    margin: '2rem 0',
    [theme.breakpoints.up(460)]: {
      paddingInline: 40,
    },
    textAlign: 'center',
    width: 'auto',
    fontsize: '1rem',
    color: 'rgb(0,0,0)',
  },
  text: {
    fontsize: '1rem',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
  },
  heads: {
    color: 'black',
    width: 'auto',
  },
  tabs: {
    width: 'auto',
  },
  topbar: {
    justifyContent: 'center',
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

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
  indicator: {
    backgroundColor: '#012970',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    fontFamily: ['sans-serif'].join(','),
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: '#012970',
      opacity: 1,
    },
    '&$selected': {
      color: '#012970',
      fontWeight: theme.typography.fontWeightBold,
    },
    '&:focus': {
      color: '#012970',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function createData(name, calories, points) {
  return { name, calories, points };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const rows = [
  createData(
    'B.Tech.,B.E. or B.Sc. (Engineering)',
    'At least 60% marks or At least 6.5/10 Cumulative Performance Index (CPI) or Cumulative Grade Point Average (CGPA)',
    'Valid GATE score'
  ),
  createData(
    'M.Sc. in Sciences',
    'At least 70% marks or At least 7/10 Cumulative Performance Index (CPI) or Cumulative Grade Point Average (CGPA)',
    'Valid GATE score'
  ),
  createData(
    'B.Tech. from any of the IITs',
    'CPI or CGPA 8/10 or above',
    'The requirement of valid GATE score is exempted'
  ),
];

export default function BasicTable() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="lg">
        <FadeInWhenVisible>
          <Paper
            className={classes.heading}
            style={{ background: '#012970', color: '#fff' }}
            elevation={2}
          >
            <LibraryAddCheckIcon style={{ margin: '0 1.2rem', padding: '0' }} />
            Admission Procedure
          </Paper>
        </FadeInWhenVisible>
        <FadeUpWhenVisible>
          <Paper className={classes.paper}>
            <div>
              <AntTabs
                className={classes.topbar}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                width="auto"
              >
                <AntTab
                  label="B. TECH"
                  {...a11yProps(0)}
                  className={classes.heads}
                />
                <AntTab
                  label="M. TECH."
                  {...a11yProps(1)}
                  className={classes.heads}
                />
                <AntTab
                  label="M.Sc"
                  {...a11yProps(2)}
                  className={classes.heads}
                />
              </AntTabs>
            </div>
            <TabPanel value={value} index={0}>
              <Typography
                component="h4"
                style={{ fontSize: 20, fontWeight: 'bold' }}
              >
                B.TECH
              </Typography>
              <Typography className={classes.text}>
                Admissions to B.Tech. Programs are made once a year (in July)
                through the all-India level Joint Entrance Examination (JEE)
                conducted by IITs. The procedures and other requirements for
                admission are specified in the JEE Information Brochure brought
                out every year.
                <Link
                  href="http://iitj.ac.in/admission/btech.php?id=eligibility"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Link>
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography
                component="h4"
                style={{ fontSize: 20, fontWeight: 'bold' }}
              >
                M.TECH
              </Typography>
              <Typography className={classes.text}>
                The eligibility criteria prescribed below are the absolute
                minimum. The Admissions Committee may prescribe requirements
                over and above these.{' '}
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Read More
                </Link>
              </Typography>
              <TableContainer
                className={classes.tablewrapper}
                component={Paper}
                elevation={0}
              >
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>QUALIFYING DEGREE</TableCell>
                      <TableCell align="left">
                        MARKS OBTAINED IN QUALIFYING DEGREE
                      </TableCell>
                      <TableCell align="left">OTHER REQUIREMENTS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.calories}</TableCell>
                        <TableCell align="left">{row.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography
                component="h4"
                style={{ fontSize: 20, fontWeight: 'bold' }}
              >
                M.Sc
              </Typography>
              <Typography className={classes.text}>
                Admissions to M.Sc Programs are made once a year (in July)
                through the all-India level Joint Admission Test for
                Masters(JAM) conducted by IITs. The eligibility criteria
                prescribed below are the absolute minimum. However, the
                procedures and other requirements for admission are specified in
                the JAM Information Brochure brought out every year.
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  {' '}
                  Read More
                </Link>
              </Typography>
            </TabPanel>
            <div>
              <img src={admission} width="100%" height="50%" alt="admsission" />
            </div>
          </Paper>
        </FadeUpWhenVisible>
      </Container>
    </>
  );
}
