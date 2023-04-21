import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../redux/countries';

export default function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <header className="App-header">
      <div className="brand">
        <img src="/img/countries.png" alt="logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search for a country" />
        <button type="button">
          <i className="fa fa-search" />
        </button>
      </div>
    </header>
  );
}
