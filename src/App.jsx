import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import WhyManima from "./components/WhyManima";
import FAQ from "./components/FAQ";
import data from "./data/content.json";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesGrid cards={data.cards} />
      <WhyManima />
      <FAQ faqs={data.faqs} />
    </>
  );
}

export default App;
