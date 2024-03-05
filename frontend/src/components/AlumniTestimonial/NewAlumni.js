import React from 'react';
import Slider from 'react-slick';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DialogBox from '../DialogBox';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import RateReviewIcon from '@material-ui/icons/RateReview';
import testiBack from '../../assets/testiback2.jpg';
import styles from './AlumniTestimonial.module.css';
import { getLink } from '../../utils/getLink';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  .slick-slide {
    -webkit-transform: scale3d(0.8, 0.8, 1);
    transform: scale3d(0.8, 0.8, 1);
    transition: all 0.3s ease-in-out;
  }
  .slick-cloned {
    opacity: 0;
  }
  .slick-active {
    opacity: 0.2;
    -webkit-transform: scale3d(0.8, 0.8, 1);
    transform: scale3d(0.8, 0.8, 1);
    transition: all 0.3s ease-in-out;
  }
  .slick-center {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  .slick-slide {
    outline: none;
  }
  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    z-index: 1;
  }
  .slick-prev {
    left: 100px;
  }
  .slick-next {
    right: 112px;
  }
  @media screen and (max-width: 1100px) {
    .slick-prev {
      left: 0px;
    }
    .slick-next {
      right: 12px;
    }
  }
  .slick-next:before,
  .slick-prev:before {
    color: black;
    font-size: xx-large;
  }
  .slick-dots {
    bottom: -40px;
  }
  .slick-dots li {
    opacity: 1;
    background: rgb(24, 124, 211);
    width: 8px;
    height: 8px;
    transition: transform 0.3s;
    border-radius: 20%;
  }
  .slick-dots .slick-active {
    background: #012970;
    transform: scale(1.8);
  }
`;

const AlumniTestimonial = ({ data }) => {
  const getAlumni_Testimonials = () => {
    let Testi_list = [];

    data.map((Testimonial_Obj) => {
      return Testi_list.push(
        <div key={Testimonial_Obj.alumni_name}>
          <div
            style={{
              margin: 10,
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <Card
              style={{
                boxShadow:
                  '0 4px 8px 0 rgba(0, 0, 0, 0.16), 0 6px 20px 0 rgba(0, 0, 0, 0.13)',
              }}
              className={styles.root}
            >
              <div>
                <CardMedia className={styles.media} image={testiBack} />
                <div className={styles.profile}>
                  <img
                    className={styles.avatar}
                    alt={Testimonial_Obj.alumni_name}
                    src={getLink(Testimonial_Obj.alumni_image)}
                  />
                </div>
                <CardContent className={styles.cardtextcontent}>
                  <div className={styles.name_container}>
                    <Typography component={'span'} className={styles.name}>
                      {Testimonial_Obj.alumni_name}
                    </Typography>
                    <Typography
                      component={'span'}
                      className={styles.company_name}
                    >
                      {Testimonial_Obj.company_working}
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    component={'span'}
                    className={styles.main_content}
                  >
                    {Testimonial_Obj.testimonial}{' '}
                    {Testimonial_Obj.readmore !== '' ? (
                      <DialogBox
                        label={'read more'}
                        title={
                          Testimonial_Obj.alumni_name +
                          ' - ' +
                          Testimonial_Obj.company_working
                        }
                        text={Testimonial_Obj.readmore}
                      />
                    ) : null}
                  </Typography>
                </CardContent>
              </div>
              <CardActions className={styles.cardsocial}>
                <div>
                  {Testimonial_Obj.linkedin !== null && (
                    <IconButton
                      href={Testimonial_Obj.linkedin}
                      color="primary"
                      variant="outlined"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  )}
                  {Testimonial_Obj.facebook !== null && (
                    <IconButton
                      href={Testimonial_Obj.facebook}
                      color="primary"
                      variant="outlined"
                    >
                      <FacebookIcon />
                    </IconButton>
                  )}
                  {Testimonial_Obj.mailId !== null && (
                    <IconButton
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${Testimonial_Obj.mailId}`}
                      color="secondary"
                      variant="outlined"
                    >
                      <EmailIcon />
                    </IconButton>
                  )}
                  {Testimonial_Obj.twitter !== null && (
                    <IconButton
                      href={Testimonial_Obj.twitter}
                      color="primary"
                      variant="outlined"
                    >
                      <TwitterIcon />
                    </IconButton>
                  )}
                </div>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    });

    return Testi_list;
  };
  var settings = {
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div style={{ marginBottom: '4rem', background: '#f6f9ff' }}>
      <div className="py-5">
        <Container
          style={{
            maxWidth: '100%',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 40,
                textAlign: '-webkit-center',
                justifyContent: 'center',
                display: 'flow-root',
                marginBottom: -10,
                marginTop: 70,
              }}
            >
              <RateReviewIcon
                style={{
                  margin: '0 0.8rem -0.4rem 0',
                  fontSize: '3rem',
                  paddingTop: '0rem',
                }}
              />
              Alumni Testimonial
            </h2>
            <h3>
              <hr style={{ width: '60%', marginBottom: 35 }} />
            </h3>
          </div>
          <Container maxWidth="lg">
            <StyledSlider
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItem: 'center',
                display: 'flex',
                marginTop: 0,
              }}
              {...settings}
            >
              {getAlumni_Testimonials()}
            </StyledSlider>
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default AlumniTestimonial;
