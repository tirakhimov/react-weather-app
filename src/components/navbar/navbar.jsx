import React from 'react';
import { Typography, Menu, Layout } from 'antd';

import './navbar.css';

function Navbar() {
  const { Header } = Layout;
  const { Text } = Typography;

  return (
    <Header className="navbar">
      <div className="navbar__logo">
        <a href="/#" className="link navbar__logo-link">
          <Text className="navbar__logo-text">Weather App</Text>
        </a>
      </div>
      <Menu
        mode="horizontal"
        theme="dark"
        defaultSelectedKeys="today"
        className="navbar__links"
      >
        <Menu.Item href="/#" key="today" className="link navbar__link">
          Сегодня
        </Menu.Item>
        <Menu.Item href="/#" className="link navbar__link">
          Завтра
        </Menu.Item>
        <Menu.Item href="/#" className="link navbar__link">
          Три дня
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
