import SocialLinks from './SocialLinks';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Gise Cassiani · Mom life & lifestyle
      </p>

      <SocialLinks />
    </footer>
  );
}

export default Footer;
