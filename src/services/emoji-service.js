export default class EmojiService {
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

  setEmojiFor(weatherName) {
    return this.weatherEmojisObject[weatherName];
  }
}
