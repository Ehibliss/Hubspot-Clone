import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Feature from "./components/features/Feature";
import Testimonial from "./components/testimonials/Testimonial";
import Footer from "./components/footer/Footer";
import Feedback from "./components/feedbacks/Feedback";
import Growing from "./components/growing/Growing";
import Connect from "./components/connect/Connect";
import Product from "./components/products/Product";
import Resource from "./components/resources/Resource";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Testimonial />
      <Feedback />
      <Growing />
      <Connect />
      <Resource />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
