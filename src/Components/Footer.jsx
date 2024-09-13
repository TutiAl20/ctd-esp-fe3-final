import "../Styles/Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copy-right">
        <Link to="https://digitalhouse.com">
          <p>Powered by</p>
          <img src="/images/DH.png" alt="DH-logo" />
        </Link>
      </div>
      <div className="footer-social">
        <Link to="https://facebook.com">
          {" "}
          <img src="/images/ico-facebook.png" alt="" />{" "}
        </Link>
        <Link to="https://instagram.com">
          {" "}
          <img src="/images/ico-instagram.png" alt="" />{" "}
        </Link>
        <Link to="https://tiktok.com">
          {" "}
          <img src="/images/ico-tiktok.png" alt="" />{" "}
        </Link>
        <Link to="https://whatsapp.com">
          {" "}
          <img src="images/ico-whatsapp.png" alt="" />{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;