import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function AreaDropdown({ setUrlRequest }) {
  const [allArea, setAllArea] = useState([]);
  const { defaultURL } = useSelector((state) => state.meals);
  useEffect(() => {
    const fetchRequest = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const request = await fetch(url);
      const json = await request.json();
      setAllArea(json.meals);
    };
    fetchRequest();
  }, []);
  return (
    <section>
      { (allArea.length !== 0) && (
        <select
          onChange={ ({ target: { value } }) => {
            if (value === 'All') {
              setUrlRequest(defaultURL);
            } else {
              const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`;
              setUrlRequest(url);
            }
          } }
          data-testid="explore-by-area-dropdown"
        >
          <option defaultValue data-testid="All-option" value="All">All</option>
          { allArea.map(({ strArea: area }, i) => (
            <option
              key={ `${i}-${area}` }
              value={ area }
              data-testid={ `${area}-option` }
            >
              { area }
            </option>
          )) }
        </select>
      ) }
    </section>
  );
}

AreaDropdown.propTypes = {
  setUrlRequest: PropTypes.func,
}.isRequired;

export default AreaDropdown;
