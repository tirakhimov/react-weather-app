import React, {ChangeEvent, Component, FormEvent} from 'react';
import { Input } from 'antd';

import './search-bar.css';
import {WeatherCardProps} from "../../interfaces/WeatherCardProps";
import {connect} from "react-redux";
import {fetchWeather, searchCity} from '../../actions/actions';
import {Action, Dispatch} from "redux";
import {WeatherObject} from "../../interfaces/WeatherObject";

export interface SearchBarProps {
  inputValue: string | undefined;
  weatherObject: WeatherObject;
  searchCity: (inputValue: string | undefined) => object;
  fetchWeather: (inputValue: string | undefined) => object;
}

interface StateFromProps {
  inputValue: string;
  weatherObject: WeatherObject;
}

interface DispatchFromProps {
  searchCity: (inputValue: string | undefined) => object;
  fetchWeather: (inputValue: string | undefined) => object;
}

export class SearchBar extends Component<SearchBarProps> {

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if(this.props.inputValue) {
      const inputValue: string | undefined = this.props.inputValue
        .replace(/ +/g, ' ').trim();
      this.props.fetchWeather(inputValue);
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.props.searchCity(e.currentTarget.value);
  }

  render(): JSX.Element {
    return (
      <div className="weather-card__content_input-wrapper">
        <form onSubmit={this.handleSubmit}>
          <Input
            className="input weather-card__content_input"
            type="text"
            placeholder="Поиск города или места"
            onChange={this.handleChange}
            value={this.props.inputValue}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: WeatherCardProps): StateFromProps => ({
  inputValue: state.inputValue,
  weatherObject: state.weatherObject,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => {
  return  {
    searchCity: (inputValue: string | undefined): Action => dispatch<any>(searchCity(inputValue)),
    fetchWeather: (inputValue: string | undefined): Action => dispatch<any>(fetchWeather(inputValue)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);