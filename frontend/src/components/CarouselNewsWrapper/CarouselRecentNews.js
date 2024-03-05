import React from 'react';
import SectionCarousel from '../Carousel/Carousel';
import VirtualizedList from '../RecentNews/RecentNews';
import Container from '@material-ui/core/Container';
import './Carousel_News.css';
const CarouselNewsWrapper = ({ IC_Objs, news }) => {
  return (
    <Container maxWidth="lg">
      <div className="container-Overview">
        <div className="box-1">
          <SectionCarousel data={IC_Objs} />
        </div>
        <div className="box-2">
          <VirtualizedList data={news} />
        </div>
      </div>
    </Container>
  );
};

export default CarouselNewsWrapper;
