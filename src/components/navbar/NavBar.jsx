import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <div className={style.navbar}>
        <div >
          <NavLink to={'/'}>
            <strong className={style.logo}>Portfolio</strong>
          </NavLink>
        </div>
        <ul className={style.ul}>
          <li className={style.li}>
            <NavLink to={'/'} className={({isActive})=>isActive?style.navLinkActive:style.navLink}>
              Home
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink to={'contacts'} className={({isActive})=>isActive?style.navLinkActive:style.navLink}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
