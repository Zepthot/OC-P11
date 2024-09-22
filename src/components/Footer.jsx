// import libraries

// import components

// import utils

// import assets
import logoFooter from "../assets/images/logo-w.svg";
import "../assets/styles/Footer.scss";

/**
 * Application footer component.
 *
 * @returns {JSX.Element} - Component rendering.
 */

export default function Footer() {
  return (
    <footer className='footer'>
      <img
        src={logoFooter}
        alt='Kasa écrit en blanc et stylisé avec le logo'
        className='footer__logo'
      />
      <p className='footer__rights'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
