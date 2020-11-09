import React from 'react';
import {Typography, Menu, Layout} from 'antd';

import './navbar.css';

const Navbar: React.FC = (): JSX.Element => {

  const { Header } = Layout;
  const { Title, Link } = Typography;

  return (
    <Header className="navbar">
      <div className="navbar__logo">
        <Link href="/#" className="link navbar__logo-link">
          <Title className="navbar__logo-text">Weather App</Title>
        </Link>
      </div>
        <Menu
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={["today"]}
          className="navbar__links"
        >
          <Menu.Item key="today" className="link navbar__link">
            <Link href="/#">Сегодня</Link>
          </Menu.Item>
          <Menu.Item className="link navbar__link">
            <Link href="/#">Завтра</Link>
          </Menu.Item>
          <Menu.Item className="link navbar__link">
            <Link href="/#">Три дня</Link>
          </Menu.Item>
        </Menu>
    </Header>
  );
}

export default Navbar;
