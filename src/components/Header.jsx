// import libraries
import React from "react";
import { NavLink } from "react-router-dom";
// import components

// import utils

// import assets
import logoHeader from "../assets/images/logo.svg";
import "../assets/styles/Header.scss";

/**
 * Application header component.
 *
 * @returns {JSX.Element} - Component rendering.
 */

export default function Header() {
  return (
    <header className='header'>
      <img
        src={logoHeader}
        alt='Kasa coloré et stylisé avec le logo'
        className='header__logo'
      />
      <nav>
        <ul className='header__nav__list'>
          <li className='header__nav__list__item'>
            <NavLink
              to='/'
              className='header__nav__list__item__link'
              data-testid='link-home'
            >
              Accueil
            </NavLink>
          </li>
          <li className='header__nav__list__item'>
            <NavLink
              to='/about'
              className='header__nav__list__item__link'
              data-testid='link-about'
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
