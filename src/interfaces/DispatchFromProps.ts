export interface DispatchFromProps {
  searchCity: (inputValue: string | undefined) => object;
  fetchWeather: (inputValue: string | undefined) => object;
}