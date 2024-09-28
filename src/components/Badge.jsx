// import libraries
import React from "react";
// import components

// import utils

// import assets
import "../assets/styles/Badge.scss";

/**
 * Component description.
 *
 * @param {type} name - Description.
 * @returns {JSX.Element} - Component rendering.
 */

export default function Badge({ title }) {
  return (
    <div className='badge'>
      <li className='badge__title'>{title}</li>
    </div>
  );
}
