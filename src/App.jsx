import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Feature from "./components/features/Feature";
import Testimonial from "./components/testimonials/Testimonial";
import Footer from "./components/footer/Footer";
import Feedback from "./components/feedbacks/Feedback";
import Growing from "./components/growing/Growing";
import Connect from "./components/connect/Connect";

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
      <Footer />
    </div>
  );
}

export default App;
