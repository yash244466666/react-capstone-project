import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailsHeader from '../components/NavBar/DetailsHeader';

const CountryDetails = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <DetailsHeader countryName={data.name} />
      <div>
        <div className="container-details">
          <div className="top-data">
            <img src={data.flag} alt={data.name} className="details-img" />
            <div>
              <h2>
                Native name:
                <span className="data">{data.nativeName}</span>
              </h2>
              <h2>
                Continent:
                <span className="data">{data.region}</span>
              </h2>
            </div>
          </div>

          <div className="details-text">

            <h3>
              Official Name:
              <span className="data">{data.name}</span>
            </h3>
            <h3>
              Capital:
              <span className="data">{data.capital}</span>
            </h3>
            <h3>
              Sub-Region:
              <span className="data">{data.subregion}</span>
            </h3>
            <h3>
              Area:
              <span className="data">
                {data.area}
                 &nbsp; km2
              </span>
            </h3>
            <h3>
              Population:
              <span className="data">
                {(data.population / 1000000).toFixed(1)}
                &nbsp; million
              </span>
            </h3>
            <h3>
              Time Zone:
              <span className="data">
                {data.timezones}
              </span>
            </h3>
            <h3>
              Location:
              <span className="data">
                <a href={`https://maps.google.com/?q=${data.latlng[0]},${data.latlng[1]}`}>Click here</a>
                {data.maps}
              </span>
            </h3>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
