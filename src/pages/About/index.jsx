// import libraries
import React, { useEffect, useState } from "react";
// import components
import Section from "../../components/Section";
import Accordion from "../../components/Accordion";
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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./about.json");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='about'>
      <Section image={imageAbout} alt='Une forêt en montagne' />
      <section className='about__accordion'>
        {!isLoading &&
          data.map((item, index) => {
            return (
              <Accordion
                key={index}
                label={item.title}
                content={item.content}
              />
            );
          })}
      </section>
    </div>
  );
}
