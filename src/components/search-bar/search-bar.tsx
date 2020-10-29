import React, { Component, KeyboardEvent, ChangeEvent }from 'react';
import { Input } from 'antd';
import './search-bar.css';

export interface SearchBarProps {
  onInputSubmit: (inputValue: string) => void;
}

export interface SearchBarState {
  inputValue: string;
}

export default class SearchBar extends Component<SearchBarProps, SearchBarState> {

  state: SearchBarState;
  private readonly handleSubmit: (event: KeyboardEvent<HTMLInputElement>) => void;
  private readonly handleChange: (event: ChangeEvent<HTMLInputElement>) => void;

  constructor(props: SearchBarProps) {
    super(props);
    this.state = { inputValue: '' };

    this.handleSubmit = (event): void => {
      if (event.key === 'Enter') {
        const { onInputSubmit } = this.props;
        const inputValue: string = event.currentTarget.value.replace(/ +/g, ' ').trim();

        onInputSubmit(inputValue);
        this.setState({
          inputValue: '',
        });
      }
    };

    this.handleChange = (event): void => {
      this.setState({
        inputValue: event.currentTarget.value,
      });
    };
  }

  render(): JSX.Element {
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
