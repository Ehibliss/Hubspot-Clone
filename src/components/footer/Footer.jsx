import "./Footer.css";
import logo from "../../assets/10014.svg";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
  FaRedditAlien,
  FaTiktok,
} from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-popular">
          <h3>Popular Features</h3>

          <div className="popular-columns">
            <div className="footer-links">
              <a href="#">All Products and Features</a>
              <a href="#">HubSpot AEO</a>
              <a href="#">Free Meeting Scheduler App</a>
              <a href="#">Agent Hub</a>
              <a href="#">Email Tracking Software</a>
              <a href="#">AI Content Writer</a>
              <a href="#">AI Website Generator</a>
              <a href="#">Email Marketing Software</a>
              <a href="#">Lead Management Software</a>
            </div>

            <div className="footer-links">
              <a href="#">AI Prospecting Agent</a>
              <a href="#">Free Website Builder</a>
              <a href="#">Landing Pages</a>
              <a href="#">Free Online Form Builder</a>
              <a href="#">Free Chatbot Builder</a>
              <a href="#">Free Live Chat Software</a>
              <a href="#">Marketing Analytics</a>
              <a href="#">Free Landing Page Builder</a>
              <a href="#">Free Web Hosting</a>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h3>Free Tools</h3>

          <a href="#">See All Free Business Tools</a>
          <a href="#">AI Search Grader</a>
          <a href="#">AI Search Sensor</a>
          <a href="#">Make My Persona</a>
          <a href="#">Email Signature Generator</a>
          <a href="#">Free Business Templates</a>
          <a href="#">Software Comparisons Library</a>
          <a href="#">Website Templates</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Management Team</a>
          <a href="#">Board of Directors</a>
          <a href="#">Investor Relations</a>
          <a href="#" className="underlined">
            Blog
          </a>
          <a href="#">Sustainability</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-column customers-column">
          <h3>Customers</h3>

          <a href="#">Customer Support</a>
          <a href="#">Join a Local User Group</a>

          <h3 className="sub-heading">Partners</h3>

          <a href="#">All Partner Programs</a>
          <a href="#">Solutions Partner Program</a>
          <a href="#">Technology Partner Program</a>
          <a href="#">HubSpot for Startups</a>
          <a href="#">Affiliate Program</a>
        </div>
      </div>

      <div className="footer-social-section">
        <div className="social-line"></div>

        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>

          <a href="#" aria-label="X">
            <FaXTwitter />
          </a>

          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>

          <a href="#" aria-label="Reddit">
            <FaRedditAlien />
          </a>

          <a href="#" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>

        <div className="social-line"></div>
      </div>

      <div className="footer-logo">
        <img src={logo} alt="Hubspot logo" />
      </div>

      <p className="copyright">
        &copy;{new Date().getFullYear()} 2026 Blessing Ehi Ocheme. All right
        reserve
      </p>

      <button className="chat-button" aria-label="Chat">
        <FiMessageSquare />
      </button>
    </footer>
  );
}
