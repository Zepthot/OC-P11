// import libraries
import React from "react";
// import components
import Section from "../../components/Section";
// import utils

// import assets
import imageAbout from "../../assets/images/about.png";
import "../../assets/styles/About.scss";

/**
 * About page with drop-down menus.
 *
 * @returns {JSX.Element} - Page rendering.
 */

export default function About() {
  return (
    <div className='about'>
      <Section image={imageAbout} alt='Une forêt en montagne' />
    </div>
  );
}
