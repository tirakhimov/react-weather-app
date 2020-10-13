import NetworkingService from './networking-service';
import EmojiService from './emoji-service';

export default class WeatherService {
  constructor() {
    this.networkingService = new NetworkingService();
    this.emojiService = new EmojiService();
  }

  getWeatherForToday(cityName) {
    return this.networkingService.getWeather(cityName).then((body) => {
      const weatherName = body.weather[0].main;
      const temperature = Math.round(body.main.temp);

      return {
        cityName: `${cityName}`,
        temperature: `${temperature}`,
        weatherName: `${this.emojiService.setEmojiFor(weatherName)}`,
      };
    });
  }
}
