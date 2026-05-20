import "./Hero.css";
import heroImage from "../../assets/10030.jpg";
export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-card">
          <h1>About Us</h1>
          <p>
            HubSpot’s company and culture are a lot like our product. They’re
            crafted, not cobbled, for a delightful experience.
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
}
