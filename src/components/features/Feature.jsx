import "./Feature.css";
import featureImage from "../../assets/10031.jpg";
import featureImage1 from "../../assets/10032.jpg";
export default function Feature() {
  return (
    <section id="features">
      <div className="feature-container">
        <div className="feature-card feature-image">
          <img src={featureImage} alt="feature" />
        </div>
        <div className="feature-card">
          <h3>Our Mission: Helping Millions of Organizations Grow Better</h3>
          <p>
            We believe not just in growing bigger, but in growing better. And
            growing better means aligning the success of your own business with
            the success of your customers. Win-win!
          </p>
        </div>

        <div className="feature-card">
          <h3>Our Story</h3>
          <p>
            In 2004, fellow MIT graduate students Brian Halligan and Dharmesh
            Shah noticed a major shift in the way people shop and purchase
            products. Buyers didn’t want to be interrupted by ads, they wanted
            helpful information. In 2006, they founded HubSpot to help companies
            use that shift to grow better with inbound marketing.
          </p>
          <p>
            Along the way, HubSpot expanded beyond marketing into a crafted, not
            cobbled suite of products that create the frictionless customer
            experience that buyers expect today. Expertly led by CEO Yamini
            Rangan, HubSpot uses its agentic customer platform built on an
            AI-powered Smart CRM to help millions of scaling organizations grow
            better.
          </p>
        </div>
        <div className="feature-card feature-image">
          <img src={featureImage1} alt="feature" />
        </div>
      </div>
    </section>
  );
}
