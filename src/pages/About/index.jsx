// import libraries
import React from "react";
// import components
import Section from "../../components/Section";
import Accordion from "../../components/Accordion";
// import utils

// import assets
import data from "../../assets/about.json";
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
      <section className='about__accordion'>
        {data.map((item, index) => {
          return (
            <Accordion key={index} label={item.title} fontSize='24px'>
              <p className='about__accordion__content'>{item.content}</p>
            </Accordion>
          );
        })}
      </section>
    </div>
  );
}
