// Countdown.js
import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("August 19, 2025 21:00:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section d-flex items-center justify-center">
    <div className="sec2 slide-in-left " style={{ animationDelay: '1300ms' }}>
      <img src="/e7f92b1977746f7563252b2271378398.png" alt="wedding" width={300} />
    </div>
    <div className="sec1 slide-in-right" style={{ animationDelay: '1300ms' }}>
      <h2>ALMOST TIME!</h2>
      <p className="countdown-subtitle">
        Save the date as we approach the wedding of a lifetime.
      </p>
  
      <div className="countdown-timer">
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.days}</span>
          <span className="countdown-label">DAYS</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.hours}</span>
          <span className="countdown-label">HOURS</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.minutes}</span>
          <span className="countdown-label">MINUTES</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.seconds}</span>
          <span className="countdown-label">SECONDS</span>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Countdown;
