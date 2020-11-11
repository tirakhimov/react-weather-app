import React, { useState } from 'react';
import { Typography, Layout, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import NavbarMenu from '../navbar-menu/navbar-menu';

import './navbar.css';

const Navbar: React.FC = (): JSX.Element => {

  const [menuItem, setMenuItem] = useState('Сегодня');

  const { Header } = Layout;
  const { Title, Link } = Typography;

  return (
    <Header className="navbar">
      <div className="navbar__logo">
        <Link href="/#" className="link navbar__logo-link">
          <Title className="navbar__logo-text">Weather App</Title>
        </Link>
      </div>
      <div className="large-menu">
        <NavbarMenu
          setMenuItem={setMenuItem}
        />
      </div>
      <Dropdown
        className="dropdown-menu"
        overlay={ <NavbarMenu setMenuItem={setMenuItem}/> }
        trigger={['click']}
      >
        <Link
          href="/#"
          className="ant-dropdown-link"
          onClick={(e): void => e.preventDefault()}>
          {menuItem} <DownOutlined />
        </Link>
      </Dropdown>
    </Header>
  );
}

export default Navbar;
