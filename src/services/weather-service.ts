import NetworkingService, { WeatherResponse } from './networking-service';
import EmojiService from './emoji-service';
import { WeatherObject } from "../interfaces/WeatherObject";

export default class WeatherService {

  private readonly networkingService: NetworkingService;
  private readonly emojiService: EmojiService;

  constructor(networkingService: NetworkingService = new NetworkingService(),
              emojiService: EmojiService = new EmojiService()) {
    this.networkingService = networkingService;
    this.emojiService = emojiService;
  }

  getWeatherForToday(cityName: string): Promise<WeatherObject> {
    return this.networkingService
      .getWeather(cityName)
      .then((response: WeatherResponse) => {

        const cityName: string = response.name;
        const weatherName: string = response.weather[0].main;
        const temperature: number = Math.round(response.main.temp);

        const weatherObject: WeatherObject = {
          cityName: `${cityName}`,
          temperature: `${temperature}`,
          weatherName: `${this.emojiService.setEmojiFor(weatherName)}`,
        };

        return weatherObject;
      });
  }
}
