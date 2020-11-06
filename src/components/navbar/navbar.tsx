import React from 'react';
import {Typography, Menu, Layout, Col} from 'antd';

import './navbar.css';

const Navbar: React.FC = (): JSX.Element => {

  const { Header } = Layout;
  const { Text } = Typography;

  return (
    <Header className="navbar">
      <div className="navbar__logo">
        <a href="/#" className="link navbar__logo-link">
          <Text style={{color: "white"}} className="navbar__logo-text">Weather App</Text>
        </a>
      </div>
        <Menu
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={["today"]}
          className="navbar__links"
        >
          <Menu.Item key="today" className="link navbar__link">
            <a href="/#">Сегодня</a>
          </Menu.Item>
          <Menu.Item className="link navbar__link">
            <a href="/#">Завтра</a>
          </Menu.Item>
          <Menu.Item className="link navbar__link">
            <a href="/#">Три дня</a>
          </Menu.Item>
        </Menu>
    </Header>
  );
}

export default Navbar;
