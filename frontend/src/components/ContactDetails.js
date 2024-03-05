import React from 'react';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import styles from '../styles/components/ContactDetails.module.css';
import FadeInWhenVisible from './Animation/FadeIn';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
const Volunteers = () => {
  return (
    <FadeInWhenVisible>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={5}
        style={{
          width: '80%',
          margin: '4rem auto auto',
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          height="100%"
          style={{
            height: '100%',
            color: '#444444',
            background:
              '#fafbff url(https://www.linkpicture.com/q/footer-bg_3.png) center no-repeat',
          }}
        >
          <b
            style={{
              textAlign: 'center',
              fontSize: '1.6rem',
              fontWeight: 'bold',
              color: '#012970',
            }}
          >
            <LocationOnIcon
              style={{
                fontSize: '2rem',
                verticalAlign: 'text-bottom',
                marginRight: '10px',
              }}
            />
            Indian Institute of Technology Jodhpur
          </b>
          <table style={{ tableLayout: 'auto', margin: '5% 10%' }}>
            <tbody>
              <tr>
                <td>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      fontSize: '1.2rem',
                    }}
                  >
                    N.H. 65, Nagaur Road,
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      fontSize: '1.2rem',
                    }}
                  >
                    Karwar 342037,
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      fontSize: '1.2rem',
                    }}
                  >
                    Jodhpur, Rajasthan
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          height="100%"
          style={{
            height: '100%',
            color: '#444444',
            background: '#fafbff',
          }}
        >
          <span
            style={{
              textAlign: 'center',
              fontSize: '1.6rem',
              fontWeight: 'bold',
              color: '#012970',
              marginLeft: '10%',
            }}
          >
            <ContactPhoneIcon
              style={{
                fontSize: '2rem',
                verticalAlign: 'text-bottom',
                marginRight: '18px',
              }}
            />
            Contact Information
          </span>
          <table style={{ tableLayout: 'auto', margin: '5% 20%' }}>
            <tbody>
              <tr>
                <td>
                  <div className={styles.phone}>
                    <PhoneIcon style={{ margin: '0 0.5rem 0 0' }} />
                    +91 291 2801154
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.phone}>
                    <PhoneIcon style={{ margin: '0 0.5rem 0 0' }} />
                    +91 291 2801153
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="mailto:placement@iitj.ac.in"
                    className={styles.email}
                  >
                    <EmailIcon style={{ margin: '0 0.5rem 0 0' }} />
                    placement@iitj.ac.in
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    </FadeInWhenVisible>
  );
};

export default Volunteers;
