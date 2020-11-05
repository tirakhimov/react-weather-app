export interface FetchWeatherAction {
  type: string;
  payload: any;
}

export interface SearchCityAction {
  type: string;
  payload: string;
}

export interface ErrorAction {
  type: string;
  payload: Error | undefined;
}