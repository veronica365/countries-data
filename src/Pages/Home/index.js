import Headline from '../../components/Headline';
import CountryList from '../../components/CountryList';

export default function Home() {
  return (
    <div className="home">
      <Headline />
      <CountryList id={false} />
    </div>
  );
}
