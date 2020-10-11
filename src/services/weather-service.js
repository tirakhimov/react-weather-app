import NetworkingService from './networking-service';
import { capitalize } from "../helpers";

export default class WeatherService {

  networkingService = new NetworkingService()

  getWeatherForToday(cityName) {
    return this.networkingService.getWeatherInfo(cityName).then((body) => {
      const weatherName = body.weather[0].main;
      const temperature = Math.round(body.main.temp);

      return  {
        cityName: `${capitalize(cityName)}`,
        weatherName: `${weatherName}`,
        temperature: `${temperature}`,
      };
    });
  }
}

