import React from 'react';
import './current-date.css';
import DateFormatter from '../../services/date-formatter';

export default function CurrentDate() {

  const dateFormatter = new DateFormatter();

  return (
    <div className='weather-card__content_date'>
      <span>{dateFormatter.formatDate()}</span>
    </div>
  )
}
