import NetworkingService, {WeatherResponse, WeatherResponseWeek} from './networking-service';
import EmojiService from './emoji-service';
import {WeatherObject} from '../interfaces/WeatherObject';

export default class WeatherService {

  private readonly networkingService: NetworkingService;
  private readonly emojiService: EmojiService;

  constructor(
    networkingService: NetworkingService = new NetworkingService(),
    emojiService: EmojiService = new EmojiService()
  ) {
    this.networkingService = networkingService;
    this.emojiService = emojiService;
  }

  configureWeatherObject(cityName: string, temperature: number, weatherName: string): WeatherObject {
    return {
      cityName: cityName,
      temperature: `${temperature}`,
      weatherName: `${this.emojiService.setEmojiFor(weatherName)}`,
    }
  }

  getWeatherForToday(cityName: string | undefined): Promise<WeatherObject> {
    return this.networkingService
      .getWeatherForToday(cityName)
      .then((response: WeatherResponse) => {

        const cityName: string = response.name;
        const weatherName: string = response.weather[0].main;
        const temperature: number = Math.round(response.main.temp);

        return this.configureWeatherObject(cityName, temperature, weatherName);
      });
  }

  getWeatherForTomorrow(cityName: string | undefined): Promise<WeatherObject> {
    return this.networkingService
      .getWeatherForWeek(cityName)
      .then((response: WeatherResponseWeek) => {
        const cityName: string = response.name;
        const weatherName: string = response.daily[1].weather[0].main;
        const temperature: number = Math.round(response.daily[1].temp.day);
        
        return this.configureWeatherObject(cityName, temperature, weatherName);
      })
  }
}
