import NetworkingService from './networking-service';

export default class WeatherService {

  networkingService = new NetworkingService()

  getWeatherForToday(cityName) {
    return this.networkingService.getWeather(cityName).then((body) => {
      const weatherName = body.weather[0].main;
      const temperature = Math.round(body.main.temp);

      return  {
        cityName: `${cityName}`,
        weatherName: `${weatherName}`,
        temperature: `${temperature}`,
      };
    });
  }
}

