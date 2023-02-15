import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Country = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/${data.name}`, { state: data });
  };

  return (
    <button type="button" onClick={handleRoute} className="country-container">
      <div className="img-holder">
        <img className="flag" src={data.flag} alt={data.name} />
      </div>
      <div className="section-2">
        <h2>{data.name}</h2>
        <p>
          Numeric Code:
          <span className="dim">{data.numericCode}</span>
        </p>
      </div>
    </button>
  );
};

Country.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Country;
