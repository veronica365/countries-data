import PropTypes from 'prop-types';

export default function CountryDetail({ country }) {
  return (
    <article className="country detail">
      <div className="country-info">
        <h2 className="country-name">{country.name}</h2>
        <span className="country-flag">{country.emoji}</span>
        <h3 className="country-name">
          <i className="fa fa-building" />
          {' '}
&nbsp;&nbsp;
          {country.capital}
        </h3>
        <div className="country-data">
          <span className="country-data-value">
            <i className="fa fa-mobile" />
            {country.phone_code}
          </span>
          <span className="country-data-value">
            <i className="fa fa-money" />
            {country.currency}
            {' '}
            (
            {country.currency_symbol}
            {' '}
            )
          </span>
          <span className="country-data-value">
            <i className="fa fa-globe" />
            {country.region}
            ,
            {country.subregion}
          </span>
          <span className="country-data-value">
            <i className="fa fa-map-marker" />
            {parseFloat(country.latitude).toFixed(2)}
            {'  '}
            {'  '}
            {parseFloat(country.longitude).toFixed(2)}
          </span>
          <span className="country-data-value">
            <i className="fa fa-clock-o" />
            Timezones
          </span>
        </div>
        <div className="country-data">
          <h4>
            All time zones in
            {country.name}
            :
          </h4>
        </div>
        <div className="country-data">
          <div className="country-data-value">
            {country.timezones?.map((timezone, idx) => (
              <p className="timezone" key={timezone.zoneName}>
                {idx + 1}
                .
                {timezone.zoneName}
                {' '}
                {timezone.gmtOffsetName}
                ,
                {' '}
                {timezone.abbreviation}
                {' '}
                (
                {timezone.tzName}
                ),
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

CountryDetail.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  country: PropTypes.object.isRequired,
  //   country: PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //     phone_code: PropTypes.string.isRequired,
  //     currency: PropTypes.string.isRequired,
  //     latitude: PropTypes.string.isRequired,
  //     longitude: PropTypes.string.isRequired,
  //   }).isRequired,
};
