import { section } from "framer-motion/client";
import "./Resource.css";
import { useState } from "react";
import News1 from "../../assets/10055.svg";
import News2 from "../../assets/10056.svg";
import News3 from "../../assets/10057.svg";

export default function Resource() {
  return (
    <section id="resource">
      <div className="resource-container">
        <h2>Resources</h2>
        <div className="resource-card-container">
          <a href="#" className="resource-card">
            <div className="resource-image">
              <img src={News1} alt="" />
            </div>
            <h6>Hubspot company news</h6>
            <p>
              Read the latest announcement from HubSpot's communication team.
            </p>
          </a>

          <a href="#" className="resource-card">
            <div className="resource-image">
              <img src={News2} alt="" />
            </div>
            <h6>Ivestor Relations</h6>
            <p>find the latest earning updates and investor news.</p>
          </a>

          <a href="#" className="resource-card">
            <div className="resource-image">
              <img src={News3} alt="" />
            </div>
            <h6>What's new at Hubspot</h6>
            <p>
              Check out the newest features and improvements to Hubspot's
              products
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
