import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import '../styles/navbar.css';
import logoImage from '../assets/SAIC Logo.png';

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

  return (
    <>
      {/* <div className="navbar-top-bar"> */}
        {/* <div className="navbar-top-content">
          <div className="navbar-contact-group">
            <div className="navbar-contact-item">
              <Phone size={14} />
              <span>+91-11-XXXX-XXXX</span>
            </div>
            <div className="navbar-contact-item">
              <Mail size={14} />
              <span>info@scholarsabroad.com</span>
            </div>
            <div className="navbar-contact-item">
              <MapPin size={14} />
              <span>New Delhi, India</span>
            </div>
          </div>
          <div className="navbar-trusted">
            Trusted Immigration & Education Consultants
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <nav className="navbar-main">
        <div className="navbar-main-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo-link">
              <img src={logoImage} alt="SAIC Logo" className="navbar-logo-img" />
            <div>
              <div className="navbar-brand">Scholars Abroad</div>
              <div className="navbar-brand-desc">Immigration Consultants</div>
            </div>
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
          <button className="navbar-btn-hero">Book Consultation</button>
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

