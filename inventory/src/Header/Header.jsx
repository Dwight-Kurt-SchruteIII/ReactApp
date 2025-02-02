import "./Header.css";
function Header({ Title }) {
  return (
    <header className="HeaderContainer">
      <div className="HeaderHeadLine">
        <h1>{Title}</h1>
      </div>
    </header>
  );
}
function Nav() {
  return (
    <ul>
      <li>
        <a href="#nice">
          <button>Home</button>
        </a>
      </li>
      <li>
        <div class="dropdown">
          <button>Products</button>
          <div class="dropdown-content">
            <a href="#link1">Jewellery</a>
            <a href="#link2">Candles</a>
            <a href="#link3">Other</a>
          </div>
        </div>
        
      </li>

      <li>
        <a href="#nice">
          <button>Services</button>
        </a>
      </li>
      <li>
        <a href="#nice">
          <button>Contact</button>
        </a>
      </li>
    </ul>
  );
}

export { Header, Nav };
