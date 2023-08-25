import reactLogo from '../assets/react.svg';

const Header = () => {
  return (
    <header className='header-container'>
      <nav className='nav-container'>
        <img src={reactLogo} />
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
