import Logo from "../../assets/images/logo2.svg";
import Instagram from "../../assets/images/socials/Instagram.svg";
import Twitter from "../../assets/images/socials/Twitter.svg";
import Facebook from "../../assets/images/socials/Facebook.svg";
import LinkedIn from "../../assets/images/socials/LinkedIn.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-brand">
          <img src={Logo} alt="Get A Job Logo" className="footer-logo" />
          <p className="footer-description">
            Getajobng provides a full online service for anyone looking for a
            new job. {"We're"} not a recruitment agency, {"we're"} a job site.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <div>
            <h4>Information</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Job Seekers</h4>
            <ul>
              <li>
                <a href="#">Create Account</a>
              </li>
              <li>
                <a href="#">Job List</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Employers</h4>
            <ul>
              <li>
                <a href="#">Create Account</a>
              </li>
              <li>
                <a href="#">Post a Job</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="footer-bottom">
        © Copyright Get-A-Job RMS 2019, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;