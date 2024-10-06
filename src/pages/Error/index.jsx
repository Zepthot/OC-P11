// import libraries
import React from "react";
// import components

// import utils

// import assets
import "../../assets/styles/Error.scss";
import { Link } from "react-router-dom";

/**
 * Error page used for all addresses not listed.
 *
 * @returns {JSX.Element} - Component rendering.
 */

export default function Error() {
  return (
    <div className='error'>
      <h1 className='error__code'>404</h1>
      <h2 className='error__text'>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to='/' className='error__link'>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
