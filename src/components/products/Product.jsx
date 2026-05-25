import { section } from "framer-motion/client";
import "./Product.css";
import { useState } from "react";
export default function Product() {
  return (
    <section id="product">
      <div className="product-container">
        <div className="product-texts">
          <h2>HubSpot Products</h2>
          <p>
            Each product in HubSpot’s customer platform is connected to the same
            underlying Smart CRM database. Although our products are powerful on
            their own, the real magic happens when you use them together.
          </p>
        </div>

        <div className="product-card-container">
          <div className="product-card">
            <h6>Marketing Hub</h6>
            <p>
              Marketing automation software to help you generate leads and
              automate marketing that drives growth.
            </p>
            <a href="#">learnmore</a>
          </div>

          <div className="product-card">
            <h6>Sales Hub </h6>
            <p>
              Powerful sales software to help teams close more deals, deepen
              relationships, and manage their pipeline more effectively.
            </p>
            <a href="#">learnmore</a>
          </div>

          <div className="product-card">
            <h6>Service Hub</h6>
            <p>
              Customer service management software to help you connect with
              customers, exceed expectations, and turn them into promoters who
              grow your business.
            </p>
            <a href="#">learnmore</a>
          </div>

          <div className="product-card">
            <h6>Content Hub</h6>
            <p>
              AI-powered content marketing software that helps marketers create
              and manage content that fuels the entire customer journey.
            </p>
            <a href="#">learnmore</a>
          </div>

          <div className="product-card">
            <h6> Data Hub</h6>
            <p>
              Transform scattered data into actionable intelligence with
              AI-powered data management.
            </p>
            <a href="#">learnmore</a>
          </div>

          <div className="product-card">
            <h6>Commerce Hub</h6>
            <p>
              B2B commerce software designed to help you streamline your
              opportunity-to-revenue process so you get paid faster, increase
              revenue, and save time.
            </p>
            <a href="#">learnmore</a>
          </div>
        </div>
      </div>
    </section>
  );
}
