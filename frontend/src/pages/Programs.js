import React from 'react';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import ProgramCard from '../components/ProgramCard';
import styles from '../styles/pages/Programs.module.css';

function createData(name, link) {
  return { name, link };
}

const Programs = [
  'Bachelor of Technology Programs',
  'Master of Technology Programs',
  'Master of Science Programs',
  'Master of Science - Master of Technology Programs',
  'Master of Technology - Doctor of Philosophy Dual Degree Programs',
  'Doctor of Philosophy Programs (Core Sciences)',
  'Doctor of Philosophy Programs (Engineering Sciences)',
  'Doctor of Philosophy Programs (Inter Disciplinary Areas)',
  'Doctor of Philosophy Programs (Humanities and Social Sciences)',
];

const bTechProgram = [
  createData(
    'B. Tech. (Bioengineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=12'
  ),
  createData(
    'B. Tech. (Mechanical Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=15'
  ),
  createData(
    'B. Tech. (Electrical Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=14'
  ),
  createData(
    'B. Tech. (Computer Science and Engineering)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=btech&dep=cse'
  ),
  createData(
    'B. Tech. (Artificial Intelligence and Data Science)',
    'https://cse.iitj.ac.in/index.php/undergraduate#b_ai'
  ),
  createData(
    'B. Tech. (Chemical Engineering)',
    'https://iitj.ac.in/department/index.php?id=ug_program&dept=chemical'
  ),
  createData(
    'B. Tech. (Metallurgical and Materials Engineering)',
    'https://iitj.ac.in/department/index.php?id=ug_program&dept=materials'
  ),
  createData(
    'B. Tech. (Civil and Infrastructure Engineering)',
    'https://iitj.ac.in/department/index.php?id=ug_program&dept=civil'
  ),
];

const mTechProgram = [
  createData(
    'M. Tech. (Bioscience and Bioengineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=19'
  ),
  createData(
    'M. Tech. (Computer Science and  Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=20'
  ),
  createData(
    'M. Tech. (Artificial Intelligence)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=39'
  ),
  createData(
    'M. Tech. (Cyber Physical Systems)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=43'
  ),
  createData(
    'M. Tech. (Sensors and Internet of Things)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=44'
  ),
  createData(
    'M. Tech. (Data and Computational Science)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=45'
  ),
  createData(
    'M. Tech. (Advanced Manufacturing and Design)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=41'
  ),
  createData(
    'M. Tech. (Thermofluids Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=40'
  ),
  createData(
    'M. Tech. (Metallurgical and Material Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=21'
  ),
  createData(
    'M. Tech. (Chemical Engineering)',
    'https://iitj.ac.in/department/index.php?id=pg_program&dept=chemical'
  ),
  createData(
    'M.Tech. (Infrastructure Engineering with specialization in Environmental Engineering)',
    'https://iitj.ac.in/academics/index.php?id=acad_program&&prog=49'
  ),
  createData(
    'M.Tech. (Infrastructure Engineering with specialization in Energy)',
    'https://iitj.ac.in/academics/index.php?id=acad_program&&prog=49'
  ),
];

const mScProgram = [
  createData(
    'M.Sc. (Chemistry)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=16'
  ),
  createData(
    'M.Sc. (Mathematics)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=17'
  ),
  createData(
    'M.Sc. (Physics)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=18'
  ),
  createData(
    'M.Sc. (Digital Humanities)',
    'https://iitj.ac.in/dh/index.php?id=msc_programs'
  ),
];

const mScMtechProgram = [
  createData(
    'Mathematics & Data Science',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=34'
  ),
  createData(
    'M.Sc. (Physics)-M.Tech. (Materials Engineering) Dual Degree Program ',
    'https://iitj.ac.in/uploaded_docs/Introduction%20-%20M.Sc.-%20Ph.D.%20Dual%20Degree%20-%2015.04.2020.pdf'
  ),
];

const mTechPhdProgram = [
  createData(
    'M.Tech.-Ph.D. Dual Degree (Bioscience & Bioengineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=10'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Computer Science & Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=2'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Artificial Enfineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=1'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Communication Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=6'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Cyber Physical Systems)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=7'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Sensors and Internet of Things)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=8'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Data and Computational Sciences)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=9'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Metallurgical & Materials Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=11'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Mechanical Design Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=5'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Advanced Manufacturing and Design)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&prog=3'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Thermofluids Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=4'
  ),
  createData(
    '	M.Tech.-Ph.D. Dual Degree (Chemical Engineering)',
    'https://iitj.ac.in/academics/index.php?id=acad_program&&prog=50'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Infrastructure Engineering with specialization in Environmental Engineering)',
    'https://iitj.ac.in/academics/index.php?id=acad_program&&prog=50'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Infrastructure Engineering with specialization in Energy)',
    'https://iitj.ac.in/academics/index.php?id=acad_program&&prog=50'
  ),
];

const phdCore = [
  createData(
    'Ph.D. (Chemistry)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=chemistry'
  ),
  createData(
    'Ph.D. (Mathematics)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=maths'
  ),
  createData(
    'Ph.D. (Physics)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=physics'
  ),
];

const phdEngineeringSciences = [
  createData(
    'Ph.D. (Biosciences and Bioengineering)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=biology'
  ),
  createData(
    'Ph.D. (Computer Science and Engineering)',
    'https://cse.iitj.ac.in/index.php/doctoral-program'
  ),
  createData(
    'Ph.D. (Electrical Engineering)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=ee'
  ),
  createData(
    'Ph.D. (Mechanical Engineering)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=me'
  ),
  createData(
    'Ph.D. (Metallurgical and Materials Engineering)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=mtech&dep=mt'
  ),
  createData(
    'Ph.D. (Chemical Engineering)',
    'https://iitj.ac.in/department/index.php?id=doc_program&dept=chemical'
  ),
  createData(
    'Ph.D. (Civil and Infrastructure Engineering)',
    'https://iitj.ac.in/academics/index.php?id=acad_program&&prog=51'
  ),
];

const phdInterDisciplinary = [
  createData(
    'Ph.D. (Robotics and Mobility Systems)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (Science of Intelligence)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (Digital Humanities)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (IOT & Applications)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (Quantum Information and Computation)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (Smart Healthcare)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (Space & Science Technologies)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
];

const phdHumanities = [
  createData(
    'Ph.D. (Humanities & Social Sciences)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=hss'
  ),
  createData(
    'Ph.D. (Management and Entrepreneurship)',
    'https://iitj.ac.in/uploaded_docs/SME%20PhD%20Preamble_06012020.pdf'
  ),
];

const Programmes = () => {
  const loading = false;

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
                  class="fas fa-university"
                  style={{ margin: '0 1.2rem', padding: '0' }}
                ></i>
                Programs
              </Paper>
            </FadeInWhenVisible>
            <Grid
              container
              direction="row"
              justify="center"
              spacing={5}
              style={{ width: '100%', margin: 'auto' }}
            >
              <Grid key={Programs[0]} item xs={12} sm={6} md={6} lg={6}>
                <ProgramCard data={bTechProgram} program={Programs[0]} />
              </Grid>
              <Grid key={Programs[1]} item xs={12} sm={6} md={6} lg={6}>
                <ProgramCard data={mTechProgram} program={Programs[1]} />
              </Grid>
              <Grid key={Programs[2]} item xs={12} sm={6} md={6} lg={6}>
                <ProgramCard data={mScProgram} program={Programs[2]} />
              </Grid>
              <Grid key={Programs[3]} item xs={12} sm={6} md={6} lg={6}>
                <ProgramCard data={mScMtechProgram} program={Programs[3]} />
              </Grid>
              <Grid key={Programs[4]} item xs={12} sm={6} md={6} lg={6}>
                <ProgramCard data={mTechPhdProgram} program={Programs[4]} />
              </Grid>
              <Grid key={Programs[5]} item xs={12} sm={6} md={6} lg={6}>
                <ProgramCard data={phdCore} program={Programs[5]} />
              </Grid>
              <Grid key={Programs[6]} item xs={12} sm={6} md={6} lg={6}>
                <ProgramCard
                  data={phdEngineeringSciences}
                  program={Programs[6]}
                />
              </Grid>
              <Grid key={Programs[7]} item xs={12} sm={6} md={6} lg={6}>
                <ProgramCard
                  data={phdInterDisciplinary}
                  program={Programs[7]}
                />
              </Grid>
              <Grid key={Programs[8]} item xs={12} sm={6} md={6} lg={6}>
                <ProgramCard data={phdHumanities} program={Programs[8]} />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default Programmes;
