import React from 'react';

const WeatherCardTomorrow: React.FC = () => {
  const printHello = (): void => {
    console.log('hello')
  }
  return(
    <div>
      <h1>Hello</h1>
      {printHello()}
    </div>
  );
}

export default WeatherCardTomorrow;