// Footer.js
import React from "react";
import "./Footer2.css";
const SeeYouThere = () => {
  const handleAddToCalendar = () => {
    const startDate = new Date('2025-06-11T20:00:00');
    const endDate = new Date('2025-06-11T23:00:00');
    
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Omar+%26+Shahd+Wedding&dates=${startDate.toISOString().replace(/-|:|\.\d\d\d/g,'')}/${endDate.toISOString().replace(/-|:|\.\d\d\d/g,'')}&details=Wedding+Ceremony+of+Omar+Ezzat+Makady+%26+Shahd+Walid+Makady&location=The+Nile+Ritz-Carlton,+Cairo`;
    
    window.open(calendarUrl, '_blank');
  };

  return (
    <div className="see-you-there-container">
      <div className="see-you-there-content">
        <p className="message">We hope to see you there.</p>
        <p className="date-message">We can’t wait to celebrate with you on Aug 19, 2025.</p>
        <button 
          className="add-to-calendar-btn"
          onClick={handleAddToCalendar}
        >
          Add To Calendar
        </button>
      </div>
    </div>
  );
};

export default SeeYouThere;
