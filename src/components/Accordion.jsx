// import libraries
import React, { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
// import components

// import utils

// import assets
import "../assets/styles/Accordion.scss";

/**
 * Component description.
 *
 * @param {type} name - Description.
 * @returns {JSX.Element} - Component rendering.
 */

export default function Accordion({ label, children, fontSize }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    const contentElement = contentRef.current;

    if (open) {
      contentElement.style.height = "0px";
    } else {
      contentElement.style.height = `${contentElement.scrollHeight}px`;
    }

    setOpen(!open);
  };

  return (
    <div data-testid='accordion' className='accordion'>
      <div className='accordion__header'>
        <span
          className='accordion__header__label'
          style={{ fontSize: fontSize }}
        >
          {label}
        </span>
        <button
          data-testid='button'
          onClick={toggleAccordion}
          className={
            open
              ? "accordion__header__button accordion__header__button-open"
              : "accordion__header__button"
          }
        >
          <IoIosArrowUp />
        </button>
      </div>
      <div
        data-testid='children'
        ref={contentRef}
        className='accordion__content'
        style={{
          height: open ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
