import "./Testimonial.css";
import testimonialImage from "../../assets/10033.svg";
import testimonialImage2 from "../../assets/10034.svg";
import testimonialImage3 from "../../assets/10035.svg";
import testimonialimage4 from "../../assets/10036.png";
import testimonialimage5 from "../../assets/10037.png";
import testimonialimage6 from "../../assets/10038.png";
import testimonialimage7 from "../../assets/10039.png";
import testimonialimage8 from "../../assets/10040.png";
export default function Testimonial() {
  return (
    <section id="testimonials">
      <div className="testimonial-container">
        <h2>HubSpot By the Numbers</h2>
        <div className="testimonial-content">
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonialImage} alt="Global Offices" />
            </div>
            <h4>15 Global Offices</h4>
            <a href="#" className="testimonial-link">
              Learn more
            </a>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonialImage2} alt="Global Offices" />
            </div>
            <h4>8,800+ Employees</h4>
            <a href="#" className="testimonial-link">
              Learn more
            </a>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonialImage3} alt="Global Offices" />
            </div>
            <h4>288,000 Customers</h4>
            <a href="#" className="testimonial-link">
              Learn more
            </a>
          </div>
        </div>
        <div className="testimonial-content2">
          <div className="card2">
            <div className="card2-child">
              <div className="testimonial-image bestresults">
                <img src={testimonialimage4} alt="bestresults" />
              </div>
              <div className="testimonial-image bestresults">
                <img src={testimonialimage5} alt="bestresults" />
              </div>
              <div className="testimonial-image bestresults">
                <img src={testimonialimage6} alt="bestresults" />
              </div>
            </div>
            <div className="card2-child">
              <div className="testimonial-image bestresults">
                <img src={testimonialimage7} alt="bestresults" />
              </div>
              <div className="testimonial-image bestresults">
                <img src={testimonialimage8} alt="bestresults" />
              </div>
            </div>
          </div>
          <div className="card2">
            <h3>Voted #1 in 571 Reports</h3>
            <a href="#" className="testimonial-link">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
