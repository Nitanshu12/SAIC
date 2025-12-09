import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, HelpCircle } from 'lucide-react';
import '../styles/footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <footer className="footer">
      {/* CTA Section */}
      <div className="footer-cta">
        <div className="footer-cta-content">
          <h2 className="footer-cta-heading">Ready to Begin Your Journey?</h2>
          <p className="footer-cta-description">
            Don't wait to take the next step in your academic and professional life. Connect with our expert counsellors today.
          </p>
          <button className="footer-cta-button" onClick={()=> Navigate('/contact')}>Book Appointment Now</button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Column 1: Scholars Abroad */}
          <div className="footer-column">
            <h3 className="footer-column-heading">Scholars Abroad</h3>
            <p className="footer-description">
              Your trusted partner for global education and immigration.
            </p>
            <div className="footer-social-icons">
              <a href="#" className="footer-social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer-social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="footer-social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-column-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div className="footer-column">
            <h3 className="footer-column-heading">Destinations</h3>
            <ul className="footer-links">
              <li>
                <Link to="/destinations/australia">Australia</Link>
              </li>
              <li>
                <Link to="/destinations/canada">Canada</Link>
              </li>
              <li>
                <Link to="/destinations/uk">United Kingdom</Link>
              </li>
              <li>
                <Link to="/destinations/usa">United States</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-column">
            <h3 className="footer-column-heading">Contact Info</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <MapPin size={18} />
                <span>123 Scholar Lane, New Delhi, India</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} />
                <span>+91 123 456 7890</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} />
                <span>info@scholarsabroad.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <button className="footer-help-button" aria-label="Help">
        <HelpCircle size={24} />
      </button> */}
    </footer>
  );
};

export default Footer;

