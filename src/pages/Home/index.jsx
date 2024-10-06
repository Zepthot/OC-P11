// import libraries
import React from "react";
// import components
import Section from "../../components/Section";
import Card from "../../components/Card";
// import utils

// import assets
import data from "../../assets/data.json";
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
      <section className='home__gallery'>
        <ul className='home__gallery__list'>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                id={item.id}
                cover={item.cover}
                title={item.title}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}
