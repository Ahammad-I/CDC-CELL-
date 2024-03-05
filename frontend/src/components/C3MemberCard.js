import React from 'react';
import styles from '../styles/components/C3MemberCard.module.css';
import EmailIcon from '@material-ui/icons/Email';
import { getLink } from '../utils/getLink';
import FadeUpWhenVisible from './Animation/FadeUp';

const C3MemberCard = ({ data }) => {
  return (
    <FadeUpWhenVisible>
      <div className={styles.teamCard}>
        <div className={styles.cardHeader}>
          <div className={styles.designation}>
            <b>{data.designation.designation}</b>
          </div>
          <div className={styles.subDesignation}>Career Development Cell</div>
        </div>
        <img
          className={styles.profileImage}
          src={getLink(data.profile_image)}
          alt={data.name}
        />
        <div className={styles.cardContent}>
          <b style={{ margin: '0', fontSize: '1.4rem' }}>{data.name}</b>
          <br></br>
          <div className={styles.department}>{data.department}</div>
          <div className={styles.cardFooter}>
            <a href={`mailto:${data.email}`} className={styles.email}>
              <EmailIcon fontSize="small" style={{ margin: '0 0.5rem' }} />
              {data.email}
            </a>
          </div>
        </div>
      </div>
    </FadeUpWhenVisible>
  );
};

export default C3MemberCard;
