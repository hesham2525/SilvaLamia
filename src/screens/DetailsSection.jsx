// DetailsSection.js
import React, { useState, useEffect } from "react";
import "./DetailsSection.css";

const DetailsSection = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <section className="details-section">
      <h2>Bear witness to our special day</h2>

      <div className="details-container">
        <div className="detail-item">
          <h3>DATE</h3>
          <p>Aug 19, 2025 at 9:00 PM</p>
        </div>

        <div className="detail-item">
          <h3>VENUE</h3>
          <p>Kempinski Wedding Halls</p>
          <p className="venue-address">
            مدخل المدينة الصناعية – أمام مصنع توشيبا العربي , اسيوط - مصر
            <br />
          </p>
        </div>

        <div className="map-wrapper" style={{ position: "relative", width: "100%", height: "400px" }}>
          <img
            src="/e600dc2ad4be96f81dafa8ef52ba2513.png"
            alt="Butterfly"
            className="map-overlay-image"
          />
          {showMap ? (
            <iframe
              title="Kempinski - Assiut"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d887.2893319481157!2d31.0607467!3d27.1827916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1445073a818d9799%3A0x14a9b05d16ca50b4!2z2YLYp9i52Ycg2KfZgdix2KfYrSDZg9mF2KjZhtiz2YPZiiAmINmD2KfYs9mE!5e0!3m2!1sen!2seg!4v1754605176211!5m2!1sen!2seg"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <p style={{ textAlign: "center", padding: "50px" }}>
              Loading map...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
