import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeHeader from '../components/NavBar/HomeHeader';
import { getCountries } from '../redux/countries';
import CountryList from '../components/countries/CountriesList';

const CountriesHome = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesData.countries);

  const [searchCountry, setSearchCountry] = useState(' ');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries.length]);

  const filteredCountries = countries.filter((country) => (
    country.name.toLowerCase().includes(searchCountry.toLowerCase())
    || country.region.toLowerCase().includes(searchCountry.toLowerCase())));
  if (!Array.isArray(countries)) {
    return <div>Loading...</div>;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCountry(e.target.value);
  };

  return (
    <div>
      <HomeHeader />
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Country"
            name="searchCountry"
            onChange={handleSearch}
          />
        </div>

        <CountryList countries={searchCountry.length ? filteredCountries : countries} />

      </div>
    </div>
  );
};

export default CountriesHome;
