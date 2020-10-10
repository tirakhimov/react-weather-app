import NetworkingService from './networking-service';
import { capitalize } from "../helpers";

export default class WeatherService {

  networkingService = new NetworkingService()

  getWeatherForToday(cityName) {
    return this.networkingService.getWeatherInfo(cityName).then((body) => {
      const temperature = Math.round(body.main.temp);
      const weatherName = body.weather[0].main;

      return  {
        cityName: `${capitalize(cityName)}`,
        temperature: `${temperature}`,
        sky: `${weatherName}`,
      };
    });
  }
}

