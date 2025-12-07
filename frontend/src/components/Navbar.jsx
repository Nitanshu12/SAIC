import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import '../styles/navbar.css';
import logoImage from '../assets/Saic-logo2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();

  return (
    <>
      {/* Main Navigation */}
      <nav className="navbar-main">
        <div className="navbar-main-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo-link">
              <img src={logoImage} alt="SAIC Logo" className="navbar-logo-img" />
            {/* <div>
              <div className="navbar-brand">Scholars Abroad</div>
              <div className="navbar-brand-desc">Immigration Consultants</div>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`navbar-link${isActive(link.href) ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
          <button className="navbar-btn-hero" onClick={() => navigate('/contact')}>Book Consultation</button>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-menu-btn">
            <button
              className="navbar-btn-ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="navbar-mobile-menu">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`navbar-mobile-link${isActive(link.href) ? ' active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="navbar-mobile-btn-hero">
                <button className="navbar-btn-hero navbar-btn-hero-mobile">Book Consultation</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

