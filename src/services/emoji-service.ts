export interface WeatherEmojisObject {
  [key: string]: string;
}

export default class EmojiService {

  private readonly weatherEmojisObject: WeatherEmojisObject;

  constructor() {
    this.weatherEmojisObject = {
      Thunderstorm: '⛈️',
      Drizzle: '🌧️',
      Rain: '🌧️',
      Snow: '🌨️',
      Mist: '🌫️',
      Smoke: '🌫️',
      Haze: '🌫️',
      Dust: '🌫️',
      Fog: '🌫️',
      Ash: '🌫️',
      Clear: '🔆',
      Squall: '💨',
      Tornado: '🌪',
      Clouds: '☁️',
    };
  }

  setEmojiFor(weatherName: string): string {
    return this.weatherEmojisObject[weatherName];
  }
}
