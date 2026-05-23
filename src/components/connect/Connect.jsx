import "./Connect.css";
import { useState } from "react";
import cardimage from "../../assets/10046.png";
import Garmany from "../../assets/10047.png";
import Colombia from "../../assets/10048.png";
import Dublin from "../../assets/10049.png";
import Ghent from "../../assets/10050.png";
import Netherlands from "../../assets/10051.png";
import Paris from "../../assets/10052.png";
import Toronto from "../../assets/10053.png";
import USA from "../../assets/10054.png";
import Singapore from "../../assets/10077.png";
import Sydney from "../../assets/10076.png";
import Tokyo from "../../assets/10075.png";
import UK from "../../assets/10074.png";

function Connect() {
  return (
    <section id="connect-section">
      <div className="connect-container">
        <div className="connect-card1">
          <div className="card1-info">
            <h5>Connect at One of Our Locations</h5>
            <p>Global Headquarters</p>
            <p>Boston, MA, USA</p>
            <div className="contacts">
              <label htmlFor="">Phone:</label>
              <br />
              <a href="#">
                +1 888 HUBSPOT <span>(English)</span>
              </a>{" "}
              <br />
              <a href="#">
                +1 888 482 7768 <span>(English)</span>
              </a>{" "}
              <br />
              <a href="#">
                +1 857 829 5064 <span>(Spanish)</span>
              </a>{" "}
            </div>
            <a href="#" className="contact-us">
              Contact Us
            </a>
          </div>
          <div className="card1-image">
            <img src={cardimage} alt="" />
          </div>
        </div>

        {/* different countries  */}

        <div className="connect-card2-container">
          <div className="card2-content">
            <div className="card2-image">
              <img src={Garmany} alt="Garmany image" />
            </div>
            <h6>Berlin, Germany</h6>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +49 30 208486000 <span>(German)</span>
            </a>
            <br />
            <a href="#">
              +49 30 217998000 <span>(English)</span>
            </a>
          </div>
          <div className="card2-content">
            <div className="card2-image">
              <img src={Colombia} alt="Colombia image" />
            </div>
            <h6>Bogotá, Colombia</h6>
            <label htmlFor="">Phone:</label>
            <br />
            <p>Latin America Headquarters Opened: 2018</p>
            <a href="#">
              +57 601 7057100 <span>(Spanish)</span>
            </a>
            <br />
            <a href="#">
              +57 601 7056900 <span>(English)</span>
            </a>
          </div>

          <div className="card2-content">
            <div className="card2-image">
              <img src={Dublin} alt="Dublin image" />
            </div>
            <h6>Dublin, Ireland</h6>
            <p>Europe Headquarters Opened: 2013</p>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +353 1 518 7500<span>(English)</span>
            </a>
          </div>

          <div className="card2-content">
            <div className="card2-image">
              <img src={Ghent} alt="Ghent image" />
            </div>
            <h6>Ghent, Belgium</h6>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +32 9 320 0370 <span>(French)</span>
            </a>
            <br />
            <a href="#">
              +32 9 320 0350<span>(English)</span>
            </a>
          </div>

          <div className="card2-content">
            <div className="card2-image">
              <img src={Netherlands} alt="Netherlands image" />
            </div>
            <h6>The Netherlands</h6>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +31 20 200 3299<span>(English)</span>
            </a>
          </div>
          <div className="card2-content">
            <div className="card2-image">
              <img src={Paris} alt="Paris image" />
            </div>
            <h6>Paris, France</h6>
            <p>Opened: 2016</p>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +33 1 72 73 05 00 <span>(French)</span>
            </a>
            <br />
            <a href="#">
              +33 1 72 73 06 44<span>(English)</span>
            </a>
          </div>
          <div className="card2-content">
            <div className="card2-image">
              <img src={Toronto} alt="Toronto image" />
            </div>
            <h6>Toronto, Ontario, Canada</h6>
            <p>Opened: 2021</p>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +1 888 482 7768<span>(English)</span>
            </a>
          </div>
          <div className="card2-content">
            <div className="card2-image">
              <img src={USA} alt=" USA image" />
            </div>
            <h6>San Francisco, California, USA</h6>
            <p>Opened: 2020</p>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +1 857 829 5064 <span>(Spanish)</span>
            </a>
            <br />
            <a href="#">
              +1 888 482 7768<span>(English)</span>
            </a>
          </div>

          <div className="card2-content">
            <div className="card2-image">
              <img src={Singapore} alt="Singapore image" />
            </div>
            <h6>Singapore</h6>
            <p>Opened: 2015</p>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +65 6955 6000 <span>(English)</span>
            </a>
          </div>
          <div className="card2-content">
            <div className="card2-image">
              <img src={Sydney} alt=" Sydney image" />
            </div>
            <h6>Sydney, Australia</h6>
            <p>Opened: 2014</p>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +61 2 9164 8000<span>(English)</span>
            </a>
          </div>
          <div className="card2-content">
            <div className="card2-image">
              <img src={Tokyo} alt=" Tokyo image" />
            </div>
            <h6>Tokyo, Japan</h6>
            <p>Opened: 2016</p>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +81 3-4520-9500<span>(Japanese)</span>
            </a>
          </div>
          <div className="card2-content">
            <div className="card2-image">
              <img src={UK} alt=" UK image" />
            </div>
            <h6>United Kingdom</h6>
            <label htmlFor="">Phone:</label>
            <br />
            <a href="#">
              +44 20 7324 3700 <span>(English)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Connect;
