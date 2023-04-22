import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getData, searchCountry, setCountryById } from '../../redux/countries';

export default function Navbar() {
  const oldSearch = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  function delayedSearch({ target: { value } }) {
    oldSearch.current = value;
    setTimeout(async () => {
      if (oldSearch.current === value) return dispatch(searchCountry(value));
      return '';
    }, 500);
  }
  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(setCountryById({}));
    navigate('/');
  };
  return (
    <header className="App-header">
      <div className="brand">
        {location && (
          <Link to="/" onClick={clickHandler}>
            <i className="fa fa-arrow-left" />
          </Link>
        )}
        <img src="/img/countries.png" alt="logo" />
        Country Data
      </div>
      <div className="search">
        <input
          type="text"
          onChange={delayedSearch}
          placeholder="Search by country, currency, city, region, etc"
        />
        <button type="button">
          <i className="fa fa-search" />
        </button>
      </div>
    </header>
  );
}
