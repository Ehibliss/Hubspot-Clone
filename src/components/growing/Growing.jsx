import "./Growing.css";
import { useState } from "react";
import careereimage from "../../assets/10062.png";
import hubspotbusinessimage from "../../assets/10063.png";
import forward from "../../assets/10081.png";
import backward from "../../assets/10079.png";

function Growing() {
  const growing = [
    {
      Image: careereimage,
      Text: "If you're ready to grow your career and help millions of organizations grow better, you've come to the right place. Employees can choose to work from one of our offices across the globe, fully remotely, or a mix of the two. Learn moreabout careers at HubSpot Previous.",
      Name: "Careers at HubSpot ",
      Read: "Learn More",
    },
    {
      Image: hubspotbusinessimage,
      Text: "Progress and key data on our journey to build a company future generations would be proud of.        ",
      Name: "HubSpot Responsible Business Report ",
      Read: "Read the Reports",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  function nextSlide() {
    setCurrentSlide((prev) => (prev === growing.length - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setCurrentSlide((prev) => (prev === 0 ? growing.length - 1 : prev - 1));
  }
  return (
    <section id="growing-section">
      <div className="growing-container">
        <h2>Growing Better Together</h2>
        <div className="growing-card-container">
          <button onClick={prevSlide} className="growing-icon">
            <img src={forward} alt=" forward icon" />
          </button>

          <div className="card-container">
            <div className="growing-card">
              <div className="growing-img">
                <img src={growing[currentSlide].Image} alt="" />
              </div>
              <div className="business-info">
                <h4> {growing[currentSlide].Name} </h4>
                <p>{growing[currentSlide].Text}</p>
                <a href="#">{growing[currentSlide].Read}</a>
              </div>
            </div>
            <div className="dots">
              {growing.map((item, index) => (
                <span
                  key={index}
                  className={currentSlide === index ? "dot active" : "dot"}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className="growing-icon">
            <img src={backward} alt="backward icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Growing;
