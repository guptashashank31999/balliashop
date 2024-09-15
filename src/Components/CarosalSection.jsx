import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import carosal_1Perfect from '../Assets/Images/carosal_1Perfect.png'
import carosal_2Perfect from '../Assets/Images/carosal_2Perfect.png'
import carosal_3Perfect from '../Assets/Images/carosal_3Perfect.png'
import destopBanner from '../Assets/Images/desktop-banner.png'

const items = [
    {
      src: carosal_1Perfect,
      altText: 'Krishna Battery Service Rajdhani Road Ballia',
      caption: 'Krishna Battery Service Rajdhani Road Ballia',
      key: 1,
    },
    {
        src: carosal_3Perfect,
        altText: 'Krishna Battery Service Rajdhani Road Ballia',
        caption:  'Krishna Battery Service Rajdhani Road Ballia',
        key: 3,
      },
    {
      src: carosal_2Perfect,
      altText:  'Krishna Battery Service Rajdhani Road Ballia',
      caption:  'Krishna Battery Service Rajdhani Road Ballia',
    },
    {
      src: destopBanner,
      altText:  'Krishna Battery Service Rajdhani Road Ballia',
      caption:  'Krishna Battery Service Rajdhani Road Ballia',
    },
   
  ];
const CarosalSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.caption}
            />
          </CarouselItem>
        );
      });


  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval="2000"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
};

export default CarosalSection;
