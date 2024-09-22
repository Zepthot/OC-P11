// import libraries
import React from "react";
// import components
import Section from "../../components/Section";
// import utils

// import assets
import imageHome from "../../assets/images/home.png";
import "../../assets/styles/Home.scss";

/**
 * Home page with a gallery of proposed properties.
 *
 * @returns {JSX.Element} - Component rendering.
 */

export default function Home() {
  return (
    <div className='home'>
      <Section
        image={imageHome}
        alt='Une falaise en bord de mer'
        title='Chez vous, partout et ailleurs'
      />
    </div>
  );
}
