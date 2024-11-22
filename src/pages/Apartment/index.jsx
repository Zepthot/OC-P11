// import libraries
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
// import components
import Carousel from "../../components/Carousel";
import Accordion from "../../components/Accordion";
import Badge from "../../components/Badge";
// import utils

// import assets
import data from "../../assets/data.json";
import "../../assets/styles/Apartment.scss";

/**
 * Rental details page with all information.
 *
 * @returns {JSX.Element} - Component rendering.
 */

export default function Apartment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const apartment = data.find((item) => item.id === id);

  useEffect(() => {
    if (!apartment) {
      navigate("/error");
    }
  }, [apartment, navigate]);

  if (!apartment) {
    return null;
  }

  return (
    <div data-testid='apartment' className='apartment'>
      <Carousel images={apartment.pictures} />
      <div className='apartment__details'>
        <div className='apartment__details__header'>
          <div className='apartment__details__header__info'>
            <h1 className='apartment__details__header__info__title'>
              {apartment.title}
            </h1>
            <span className='apartment__details__header__info__location'>
              {apartment.location}
            </span>
          </div>
          <ul className='apartment__details__header__tags'>
            {apartment.tags.map((item, index) => (
              <Badge key={index} title={item} />
            ))}
          </ul>
        </div>
        <div className='apartment__details__host'>
          <div className='apartment__details__host__info'>
            <span className='apartment__details__host__info__name'>
              {apartment.host.name}
            </span>
            <img
              src={apartment.host.picture}
              alt={apartment.host.name}
              className='apartment__details__host__info__picture'
            />
          </div>
          <div className='apartment__details__host__rating'>
            {Array.from({ length: 5 }, (v, i) => (
              <FaStar
                key={i}
                className='apartment__details__host__rating__star'
                color={i < `${apartment.rating}` ? "#FF6060" : "#E3E3E3"}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='apartment__accordions'>
        <Accordion label='Description' fontSize='18px'>
          <p className='apartment__accordions__text'>{apartment.description}</p>
        </Accordion>
        <Accordion label='Équipements' fontSize='18px'>
          <ul className='apartment__accordions__text apartment__accordions__list'>
            {apartment.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </div>
  );
}
