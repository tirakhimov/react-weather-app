import NetworkingService from './networking-service';

export default class WeatherService {
  #networkingService;

  constructor(networkingService) {
    this.#networkingService = networkingService;
  }

  getWeatherForToday(cityName) {
    this.#networkingService.getWeatherInfo(cityName).then((body) => {
      const weatherObj = {
        cityName: `${body.name}`,
        temperature: `${Math.round(body.main.temp - 273)}`,
        sky: `${body.weather[0].main}`,
      };
      console.log(weatherObj);
      return weatherObj;
    });
  }
}

