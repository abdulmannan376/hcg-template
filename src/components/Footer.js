import React from "react";
import { useParams } from "react-router-dom";

const Footer = () => {
  const { lang } = useParams();
  return (
    <footer style={{ marginTop: "30px" }}>
      <div className="info">
        <div className="contact-footer">
          <a
            href="tel:447452231662"
            className="phone image-zoom"
            data-dsn="parallax"
          >
            +44 745 223 16 62
          </a>
          <a
            href="mailTo:office@hotelconsulting.group"
            className="email image-zoom"
            data-dsn="parallax"
          >
            office@hotelconsulting.group
          </a>
        </div>
        <div className="copyright-social">
          <p>© 2024 Hotel Consulting Group</p>
          <ul>
            {/* <li className="image-zoom" data-dsn="parallax">
              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li className="image-zoom" data-dsn="parallax">
              <a href="#" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li> */}
            <li className="image-zoom" data-dsn="parallax">
              <a href={`/${lang}/contact`} rel="noreferrer">
                Contact US
              </a>
            </li>
            <li className="image-zoom" data-dsn="parallax">
              <a
                href="https://www.linkedin.com/company/hotel-consulting-group-london/about/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
