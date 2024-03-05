import React from 'react';
import styles from '../styles/components/ProgramCard.module.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FadeUpWhenVisible from '../components/Animation/FadeUp';
import FadeInWhenVisible from '../components/Animation/FadeIn';

const CourseCard = ({ data, program }) => {
  return (
    <FadeUpWhenVisible>
      <Accordion style={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={data.title}
        >
          <div className={styles.program}>{program}</div>
        </AccordionSummary>
        <AccordionDetails className={styles.departments}>
          <FadeInWhenVisible>
            {data.map((program) => {
              return (
                <a
                  className={styles.department}
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {program.name}
                </a>
              );
            })}
          </FadeInWhenVisible>
        </AccordionDetails>
      </Accordion>
    </FadeUpWhenVisible>
  );
};

export default CourseCard;
