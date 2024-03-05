import React from 'react';
import Slider from 'react-slick';
import BusinessIcon from '@material-ui/icons/Business';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './PastRecruiters.module.css';
import { getLink } from '../../utils/getLink';

const PastRecruiters = ({ data }) => {
  const getPR_Objs = () => {
    let list = [];

    data.map((PR) => {
      return list.push(
        <div key={PR.id}>
          <div
            style={{
              margin: 10,
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <CardMedia
              className={styles.PR_image}
              image={getLink(PR.company_logo)}
            />
          </div>
        </div>
      );
    });

    return list;
  };
  var settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div style={{ background: '#f6f9ff' }}>
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
              <BusinessIcon
                style={{
                  margin: '0 0.8rem -0.4rem 0',
                  fontSize: '3.2rem',
                  paddingTop: '0rem',
                }}
              />
              Past Recruiters
            </h2>
            <h3>
              <hr style={{ width: '60%', marginBottom: 35 }} />
            </h3>
          </div>
          <Slider style={{ width: '100%', marginTop: 0 }} {...settings}>
            {getPR_Objs()}
          </Slider>
        </Container>
      </div>
    </div>
  );
};
export default PastRecruiters;
