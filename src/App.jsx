import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Value from "./components/Value";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (      //It hides horizontal overflow
    <div className="overflow-x-hidden">   
      <Navbar />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
