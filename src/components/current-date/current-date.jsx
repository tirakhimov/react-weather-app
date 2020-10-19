import React from 'react';
import './current-date.css';

export default function CurrentDate({ currentDate }) {
  return (
    <div className="weather-card__content_date">
      <span>{currentDate}</span>
    </div>
  );
}
