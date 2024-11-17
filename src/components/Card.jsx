// import libraries
import React from "react";
import { Link } from "react-router-dom";
// import components

// import utils

// import assets
import "../assets/styles/Card.scss";

/**
 * Component description.
 *
 * @param {type} name - Description.
 * @returns {JSX.Element} - Component rendering.
 */

export default function Card({ id, cover, title }) {
  return (
    <div className='card'>
      <li className='card__item'>
        <Link
          to={`/apartment/${id}`}
          data-testid={id}
          className='card__item__link'
        >
          <img src={cover} alt={title} className='card__item__link__cover' />
          <h2 className='card__item__link__title'>{title}</h2>
        </Link>
      </li>
    </div>
  );
}
