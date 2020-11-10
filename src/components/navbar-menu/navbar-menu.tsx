import React from "react";
import {Grid, Menu, Typography} from "antd";
import './navbar-menu.css';

const NavbarMenu: React.FC = (): JSX.Element => {

  const { Link } = Typography;
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  return(
    <Menu
      mode={xs ? "inline" : "horizontal"}
      theme={xs ? "light" : "dark"}
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
  )
}

export default NavbarMenu;