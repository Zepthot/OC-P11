// import libraries
import React from "react";
// import components

// import utils

// import assets
import "../assets/styles/Section.scss";

/**
 * Component description.
 *
 * @param {type} name - Description.
 * @returns {JSX.Element} - Component rendering.
 */

export default function Section({ image, alt, title }) {
  return (
    <div className='section'>
      <img src={image} alt={alt} className='section__image' />
      {title && <h1 className='section__title'>{title}</h1>}
    </div>
  );
}
