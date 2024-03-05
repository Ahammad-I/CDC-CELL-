import React from 'react';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import './Carousel.css';
import { getLink } from '../../utils/getLink';
import FadeRightWhenVisible from '../Animation/FadeRight';
const SectionCarousel = ({ data }) => {
  const getIC_Objs = () => {
    let list = [];

    data.map((IC) => {
      return list.push(
        <div key={IC.title}>
          <img src={getLink(IC.image)} alt={IC.title} className="slick-image" />
        </div>
      );
    });

    return list;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Grid
      style={{ boxShadow: '0 0 6px' }}
      container
      className="carousel_container"
    >
      <Grid item xs={12} sm={12} md={8} className="carousel_grid">
        <FadeRightWhenVisible>
          <div>
            <Slider {...settings}>{getIC_Objs()}</Slider>
          </div>
        </FadeRightWhenVisible>
      </Grid>
    </Grid>
  );
};
export default SectionCarousel;
