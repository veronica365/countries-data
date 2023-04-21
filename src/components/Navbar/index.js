export default function Navbar() {
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
