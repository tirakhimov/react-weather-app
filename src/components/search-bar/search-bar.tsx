import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Input } from 'antd';

import './search-bar.css';

export interface SearchBarProps {
  onInputSubmit: (inputValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {

  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      const {onInputSubmit} = props;
      const inputValue: string = event.currentTarget.value
        .replace(/ +/g, ' ').trim();
      onInputSubmit(inputValue);
      setInputValue('');
    }
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.currentTarget.value);
  }

  return (
    <div className="weather-card__content_input-wrapper">
      <Input
        className="input weather-card__content_input"
        type="text"
        placeholder="Поиск города или места"
        onKeyDown={handleSubmit}
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  );
}

export default SearchBar;