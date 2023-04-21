import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Headline from '../../components/Headline';
import { findCountry, setCountryById } from '../../redux/countries';
import CountryList from '../../components/CountryList';

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountryById({}));
    dispatch(findCountry(id));
  }, [id, dispatch]);
  return (
    <div className="home">
      <Headline />
      <CountryList id />
    </div>
  );
}
