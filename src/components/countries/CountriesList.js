import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country';

const CountryList = ({ countries }) => (
  <div className="sub-container">
    { countries.map((countryData) => <Country data={countryData} key={countryData.name} />) }
  </div>
);

export default CountryList;

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
