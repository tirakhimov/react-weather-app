import React, { Component } from 'react';
import { Input } from 'antd';
import './search-bar.css';

export default class SearchBar extends Component {
  constructor({ onInputSubmit }) {
    super();
    this.state = { inputValue: '' };

    this.handleSubmit = (event) => {
      if (event.key === 'Enter') {
        const inputValue = event.target.value.replace(/ +/g, ' ').trim();
        onInputSubmit(inputValue);
        this.setState({
          inputValue: '',
        });
      }
    };

    this.handleChange = (event) => {
      this.setState({
        inputValue: event.target.value,
      });
    };
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div className="weather-card__content_input-wrapper">
        <Input
          className="input weather-card__content_input"
          type="text"
          placeholder="Поиск города или места"
          onKeyDown={this.handleSubmit}
          onChange={this.handleChange}
          value={inputValue}
        />
      </div>
    );
  }
}
