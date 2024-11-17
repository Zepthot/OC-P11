// import libraries
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import components

// import utils

// import assets
import "../assets/styles/Carousel.scss";

/**
 * Component description.
 *
 * @param {type} name - Description.
 * @returns {JSX.Element} - Component rendering.
 */

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to scroll to the next image
  const carouselScroll = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(carouselScroll, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to navigate to the previous image
  const carouselPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to navigate to the next image
  const carouselNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='carousel'>
      <ul className='carousel__images'>
        {images.map((image, index) => (
          <li
            key={index}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            className='carousel__images__item'
          >
            <img
              src={image}
              alt={`slide-${index}`}
              className='carousel__images__item__image'
            />
          </li>
        ))}
      </ul>
      <button
        data-testid='previous'
        className='carousel__button carousel__button--left'
        onClick={carouselPrevious}
        aria-label='Back'
      >
        <IoIosArrowBack />
      </button>
      <button
        data-testid='next'
        className='carousel__button carousel__button--right'
        onClick={carouselNext}
        aria-label='Next'
      >
        <IoIosArrowForward />
      </button>
      <span className='carousel__index'>
        {images.length === 0
          ? "0 / 0"
          : `${currentIndex + 1} / ${images.length}`}
      </span>
    </div>
  );
}
