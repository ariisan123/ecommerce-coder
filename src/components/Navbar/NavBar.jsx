import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import NavLinks from '../NavLinks/NavLinks';
import Logo from '../Logo/Logo';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <Logo />
        <NavLinks />
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
