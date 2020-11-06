import React, {ChangeEvent, Component} from 'react';
import { Input, Form } from 'antd';
import './search-bar.css';
import {WeatherCardProps} from "../../interfaces/WeatherCardProps";
import {connect} from "react-redux";
import {fetchWeather, searchCity} from '../../actions/actions';
import {Action, Dispatch} from "redux";
import {StateFromProps} from '../../interfaces/StateFromProps';
import {SearchBarProps} from "../../interfaces/SearchBarProps";
import {DispatchFromProps} from "../../interfaces/DispatchFromProps";

export class SearchBar extends Component<SearchBarProps> {

  handleSubmit = (): void => {
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
        <Form
          onFinish={this.handleSubmit}>
          <Form.Item>
            <Input
              size="large"
              className="input weather-card__content_input"
              type="text"
              placeholder="Поиск города или места"
              onChange={this.handleChange}
              value={this.props.inputValue}
            />
          </Form.Item>
        </Form>
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