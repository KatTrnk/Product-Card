import React from 'react';
import './Carousel.css';
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={previousSlide}
      />
      {data.map((item, index) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={slide === index ? 'slide' : 'slide slide-hidden'}
          ></img>
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                slide === index ? 'indicator' : 'indicator indicator-inactive'
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};
