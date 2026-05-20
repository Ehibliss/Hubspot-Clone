import "./Feedback.css";
import { useState } from "react";
import Patricia from "../../assets/10041.jpeg";
import Aaron from "../../assets/10042.jpeg";
import Frank from "../../assets/10043.jpeg";
import Marie from "../../assets/10044.jpeg";
import forward from "../../assets/10079.png";
import backward from "../../assets/10081.png";

function Feedback() {
  const feedbacks = [
    {
      image: Patricia,
      text: "The biggest benefit of Hubspot is that your data lives in it, you see the same customer information as the sales team and vice versa. It gives us a new level of confidence.",
      name: "PATRICIA PORTRIK ",
      role: "National Sales Operations / E-Marketing Manager ",
      company: "ARC Document Solutions",
    },
    {
      image: Aaron,
      text: "HubSpot matched our expectations for several reasons. We loved its flexibility, ease of operations, and pace of scalability. It was intuitive to pick up and adopt, and had a very user-friendly interface that was easy to adapt.",
      name: "AARON GOH ",
      role: "Head of Marketing",
      company: "Spenmo",
    },
    {
      image: Frank,
      text: "HubSpot is a company that listens and invests in its customers. They know that our success is their success.",
      name: "FRANK LOUGHAN",
      role: "VP Revenue Operations",
      company: "ARC Document Solutions",
    },
    {
      image: Marie,
      text: "HubSpot delivered an excellent level of detail, and the interface was pretty easy to use. There were 3 main reasons why we decided to adopt HubSpot — seamless collaboration between the teams, the ease of the platform, and the high level of detailing of the data.",
      name: "MARIE-MORGANE LE BRAS",
      role: "VP of Marketing",
      company: "Engage Rocket",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  function nextSlide() {
    setCurrentSlide((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setCurrentSlide((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  }
  return (
    <section id="feedbacks-section">
      <div className="feedback-container">
        <div className="feedback-text">
          <h3>What Our Customers Say</h3>
          <p>
            See how HubSpot customers are growing their businesses and getting
            incredible results.
          </p>
        </div>
        <div className="container">
          <button onClick={prevSlide} className="feedback-icon">
            <img src={forward} alt=" forward icon" />
          </button>

          <div className="card">
            <div className="profile-img">
              <img src={feedbacks[currentSlide].image} alt="" />
            </div>

            <p>{feedbacks[currentSlide].text}</p>

            <div className="profile-info">
              <h3>{feedbacks[currentSlide].name}</h3>

              <span>{feedbacks[currentSlide].role}</span>
              <br />
              <span> {feedbacks[currentSlide].company} </span>
            </div>

            <div className="dots">
              {feedbacks.map((item, index) => (
                <span
                  key={index}
                  className={currentSlide === index ? "dot active" : "dot"}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className="feedback-icon">
            <img src={backward} alt="backward icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Feedback;
