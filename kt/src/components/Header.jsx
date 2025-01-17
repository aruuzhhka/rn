
import { Link } from "react-router-dom";
import "../assets/Header.css";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      {/* Логотип слева */}
      <div className="header-logo">
        <img
          src={Logo}
          alt="Kazakhtelecom Logo"
          className="logo"
        />
      </div>

      {/* Навигационные ссылки */}
      <nav className="header-nav">
        <Link to="/" className="nav-link">
          Вход
        </Link>
        <Link to="/signup" className="nav-link">
          Регистрация
        </Link>
      </nav>
    </header>
  );
};

export default Header;