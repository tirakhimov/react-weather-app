import React from 'react';
import { Grid, Menu } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom';
import './navbar-menu.css';

interface NavbarMenuProps {
  setMenuItem: (state: string) => void;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ setMenuItem }): JSX.Element => {

  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  const handlerClickMenuItem = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    if(event) {
      setMenuItem(event.currentTarget.innerText);
    }
  }

  return(
      <Menu
        mode={xs ? 'inline' : 'horizontal'}
        theme={xs ? 'light' : 'dark'}
        defaultSelectedKeys={['today']}
        className="navbar__links"
      >
        <Menu.Item key="today" className="link navbar__link">
          <Link onClick={handlerClickMenuItem} to="/">Сегодня</Link>
        </Menu.Item>
        <Menu.Item className="link navbar__link">
          <Link onClick={handlerClickMenuItem} to="/tomorrow">Завтра</Link>
        </Menu.Item>
        <Menu.Item className="link navbar__link">
          <Link onClick={handlerClickMenuItem} to="/#">Три дня</Link>
        </Menu.Item>
      </Menu>
  )
}

export default NavbarMenu;