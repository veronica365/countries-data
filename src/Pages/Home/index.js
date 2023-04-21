import { useSelector } from 'react-redux';
import Headline from '../../components/Headline';

export default function Home() {
  const { countries } = useSelector((state) => state.countries);
  return (
    <div className="home">
      <Headline />
      <section className="countries">
        {countries.map(({ name, ...country }) => (
          <article className="country" key={country.id}>
            <div className="country-info">
              <h2 className="country-name">{name}</h2>
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
          </article>
        ))}
      </section>
    </div>
  );
}
