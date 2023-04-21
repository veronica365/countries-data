import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCountryById } from '../../redux/countries';

export default function CountryItem({ country }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(setCountryById({}));
    navigate(`/country/${country.id}`);
  };
  return (
    <article className="country">
      <Link to={`/country/${country.id}`} onClick={clickHandler}>
        <div className="country-info">
          <h2 className="country-name">{country.name}</h2>
          <div className="country-data">
            <span className="country-data-value">
              <i className="fa fa-mobile" />
              {country.phone_code}
            </span>
            <span className="country-data-value">
              <i className="fa fa-money" />
              {country.currency}
            </span>
            <span className="country-data-value">
              <i className="fa fa-map-marker" />
              {parseFloat(country.latitude).toFixed(2)}
              {' '}
&nbsp;&nbsp;
              {parseFloat(country.longitude).toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

CountryItem.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone_code: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
  }).isRequired,
};
