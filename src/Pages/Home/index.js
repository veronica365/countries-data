import { useSelector } from 'react-redux';
import Headline from '../../components/Headline';
import CountryItem from '../../components/CountryItem';

export default function Home() {
  const { countries } = useSelector((state) => state.countries);
  return (
    <div className="home">
      <Headline />
      <section className="countries">
        {countries.map((country) => (
          <CountryItem key={country.id} country={country} />
        ))}
      </section>
    </div>
  );
}
