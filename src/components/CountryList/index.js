import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CountryItem from '../CountryItem';

export default function CountryList({ id }) {
  const { countries, countryById, countriesBySearch } = useSelector(
    (state) => state.countries,
  );
  if (countriesBySearch.length || (!id && !countryById?.id)) {
    return (
      <section className="countries">
        {countriesBySearch.map((country) => (
          <CountryItem key={country.id} country={country} />
        ))}
        {countriesBySearch.length === 0
          && countries.map((country) => (
            <CountryItem key={country.id} country={country} />
          ))}
      </section>
    );
  }
  return (
    <section className="countries">
      {countryById.id && <CountryItem country={countryById} />}
    </section>
  );
}

CountryList.propTypes = {
  id: PropTypes.bool.isRequired,
};
