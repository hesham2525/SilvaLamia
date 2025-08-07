import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h3 className=" quran-text fade-down" style={{ animationDelay: '300ms' }} >وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً إِنَّ فِي ذَلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ </h3>
        <br/>
      <h3 className="fade-up" style={{ animationDelay: '300ms' }}>S & L</h3>
      <h3 className=" fade-up" style={{ animationDelay: '500ms' }}>Wedding Ceremony</h3>
        <br/>
        <br/> 
        <br/>
        <br/>

        <h1 className="couple-names fade-up" style={{ animationDelay: '700ms' }}> Silvester Aleksejevas </h1>
        <h1 className="couple-names fade-up" style={{ animationDelay: '700ms' }}>&</h1>
         
        <h1 className="couple-names fade-up" style={{ animationDelay: '700ms' }}>Lamiaa Tarek </h1>
       
        <h2 className="wedding-title fade-up" style={{ animationDelay: '800ms' }}>Wedding Ceremony</h2>
        <div className="date-venue fade-up" style={{ animationDelay: '800ms' }}>
          <p>Aug 19, 2025 at 9:00 PM</p>
          <p> Kempinski - Assuit </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;