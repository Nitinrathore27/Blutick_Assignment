import styles from "./index.css"
import BlogsSection from "./Components/BlogsSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import LetsConnectSection from "./Components/LetsConnectSection";
import WhatWeOfferSection from "./Components/WhatWeOfferSection";

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <WhatWeOfferSection/>
      <BlogsSection/>
      <LetsConnectSection/>
      <Footer/>
    </div>
  );
}

export default App;
