import "./App.css";
import Countdown from "./screens/Countdown.jsx";
import DetailsSection from "./screens/DetailsSection.jsx";
import Footer from "./screens/Footer.jsx";
import SeeYouThere from "./screens/Footer2.jsx";

import HeroSection from "./screens/HeroSection.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="wedding-website">
        <HeroSection />
        <Countdown />
        <DetailsSection/>
        <Footer/>
        <SeeYouThere/>

      </div>
    </>
  );
}

export default App;
