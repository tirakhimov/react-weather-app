import React, { useState } from 'react';
import { Typography, Layout, Button, Drawer } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';

import './navbar.css';
import NavbarMenu from "../navbar-menu/navbar-menu";

const Navbar: React.FC = (): JSX.Element => {

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = (): void => {
    setDrawerVisible(true);
  };

  const onClose = (): void => {
    setDrawerVisible(false);
  };

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
        <NavbarMenu />
      </div>
      <Button
        className="bars-menu"
        onClick={showDrawer}
        type={"primary"}
      >
        {React.createElement(MenuFoldOutlined)}
      </Button>
      <Drawer
        title="Показать погоду"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
      >
        <NavbarMenu />
      </Drawer>
    </Header>
  );
}

export default Navbar;
