import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Headline from '../../components/Headline';
import CountryList from '../../components/CountryList';
import { setCountryById } from '../../redux/countries';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountryById({}));
  }, [dispatch]);

  return (
    <div className="home">
      <Headline />
      <CountryList id={false} />
    </div>
  );
}
