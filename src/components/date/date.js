import React from 'react';
import './date.css';
import DateFormatter from '../../services/date-formatter';

export default function Date() {

  const dateFormatter = new DateFormatter();

  return (
    <div className='weather-card__content_date'>
      <span>{dateFormatter.formatDate()}</span>
    </div>
  )
}
