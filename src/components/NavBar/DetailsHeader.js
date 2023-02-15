import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsMicFill, BsGearFill, BsArrowLeft } from 'react-icons/bs';
import './Header.css';

const DetailsHeader = ({ countryName }) => (
  <header>
    <NavLink to="/" className="nav-links">
      <h3 className="to-back">
        <BsArrowLeft />
        <small>back to countries</small>
      </h3>
    </NavLink>

    <h2>{countryName}</h2>

    <div className="nav-icons">
      <BsMicFill />
      <BsGearFill />
    </div>
  </header>
);

DetailsHeader.propTypes = {
  countryName: PropTypes.string.isRequired,
};

export default DetailsHeader;
