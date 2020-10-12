import NetworkingService from './networking-service';
import EmojiService from "./emoji-service";

export default class WeatherService {

  networkingService = new NetworkingService()
  emojiService = new EmojiService()

  getWeatherForToday(cityName) {
    return this.networkingService.getWeatherInfo(cityName).then((body) => {
      const temperature = Math.round(body.main.temp);
      const weatherName = body.weather[0].main;

      return  {
        cityName: `${cityName}`,
        temperature: `${temperature}`,
        weatherName: `${this.emojiService.setEmojiFor(weatherName)}`,
      };
    });
  }
}

