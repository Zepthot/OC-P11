// import libraries
import React, { useEffect, useState } from "react";
// import components
import Section from "../../components/Section";
import Card from "../../components/Card";
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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
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
    <div className='home'>
      <Section
        image={imageHome}
        alt='Une falaise en bord de mer'
        title='Chez vous, partout et ailleurs'
      />
      <section className='home__gallery'>
        <ul className='home__gallery__list'>
          {!isLoading &&
            data.map((item, index) => {
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
