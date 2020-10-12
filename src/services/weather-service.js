import NetworkingService from './networking-service';
import EmojiConfigurator from "./emoji-service";

export default class WeatherService {

  networkingService = new NetworkingService()
  emojiConfigurator = new EmojiConfigurator()

  getWeatherForToday(cityName) {
    return this.networkingService.getWeatherInfo(cityName).then((body) => {
      const temperature = Math.round(body.main.temp);
      const weatherName = body.weather[0].main;

      return  {
        cityName: `${cityName}`,
        temperature: `${temperature}`,
        weatherName: `${this.emojiConfigurator.setEmojiFor(weatherName)}`,
      };
    });
  }
}

