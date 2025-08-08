import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <br />
        <h1 className=" Wedding fade-down" style={{ animationDelay: "300ms" }}>
          Wedding Ceremony
        </h1>
        <br />
       
        <h3 className="quran-text fade-up" style={{ animationDelay: "500ms", lineHeight: "2.5" }}>
        ( بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ )
        </h3>
        <h3 className="quran-text fade-up" style={{ animationDelay: "500ms" }}>
         وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
          لِتَسْكُنُوا إِلَيْهَا  
        </h3>
        <h3 className="quran-text fade-up" style={{ animationDelay: "500ms" }}>
           وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً إِنَّ فِي ذَلِكَ لَآيَاتٍ لِقَوْمٍ
          يَتَفَكَّرُونَ
        </h3>
        <br />
        <br />
        <h2 className="slsl fade-up" style={{ animationDelay: "400ms" }}>
          S & L
        </h2>
        
      
       
        <br />
        <h1
          className="couple-names fade-up"
          style={{ animationDelay: "700ms" }}
        >
          {" "}
          Silvester Aleksejevas{" "}
        </h1>
        <h1
          className="slsl fade-up"
          style={{ animationDelay: "700ms" }}
        >
          &
        </h1>
        <h1
          className="couple-names fade-up"
          style={{ animationDelay: "700ms" }}
        >
          Lamya Tarek{" "}
        </h1>
        <br />
        <div className="date-venue fade-up" style={{ animationDelay: "800ms" }}>
          <p>Aug 19, 2025 </p>
          <p> 9:00 PM</p>

          <p> Kempinski - Assuit </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
