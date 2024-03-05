import React from 'react';
import styles from '../styles/components/ContactCard.module.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { getLink } from '../utils/getLink';
import FadeUpWhenVisible from './Animation/FadeUp';

const ContactCard = ({ data }) => {
  return (
    <FadeUpWhenVisible>
      <div className={styles.contactCard}>
        <div className={styles.cardHeader}>
          <div className={styles.designation}>
            <b>{data.designation.designation}</b>
          </div>
          <div className={styles.subDesignation}>{data.sub_designation}</div>
        </div>
        <img
          className={styles.profileImage}
          src={getLink(data.profile_image)}
          alt={data.name}
        />
        <div className={styles.cardContent}>
          <b style={{ margin: '0', fontSize: '1.4rem' }}>
            {data.user.first_name} {data.user.last_name}
          </b>
          <div className={styles.footer}>
            <table style={{ tableLayout: 'auto', margin: 'auto' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href={`mailto:${data.user.email}`}
                      className={styles.email}
                    >
                      <EmailIcon
                        fontSize="small"
                        style={{ margin: '0 0.5rem' }}
                      />
                      {data.user.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.phone}>
                      <PhoneIcon
                        fontSize="small"
                        style={{ margin: '0 0.5rem' }}
                      />
                      {data.phone}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            {data.github_link || data.linkedin_link ? (
              <div className={styles.social}>
                {data.github_link ? (
                  <a
                    href={data.github_link}
                    className={styles.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon style={{ width: '1.8rem', height: '1.8rem' }} />
                  </a>
                ) : null}
                {data.linkedin_link ? (
                  <a
                    href={data.linkedin_link}
                    className={styles.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      style={{
                        width: '2.2rem',
                        height: '2.2rem',
                      }}
                    />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </FadeUpWhenVisible>
  );
};

export default ContactCard;
