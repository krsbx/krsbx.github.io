import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import NavBarData from './NavBarData';
import { MdMenu, MdArrowBack } from 'react-icons/md';

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [sticky, setSticky] = useState(false);

  //Change the state of the SideBar (Visible/Invisible)
  //  Invisible => false
  //  Visible => true
  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const onTop = window.scrollY < 20;
      if (!onTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <div className="Navigations">
      <div className={sticky ? 'SideBar Sticky' : 'SideBar'}>
        <Link to="#" className="MenuBar">
          <MdMenu onClick={showSideBar} />
        </Link>
        <div className="Hide-Able-Menu">
          {NavBarData.map((item, id) => {
            let toShow = (
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            );

            if (item.title === 'Game') {
              toShow = (
                <a href={item.path}>
                  <span>{item.title}</span>
                </a>
              );
            }
            return (
              <li key={id} className={item.clName}>
                {toShow}
              </li>
            );
          }, this)}
        </div>
      </div>
      <nav
        className={
          sideBar
            ? sticky
              ? 'nav-menu active Sticky'
              : 'nav-menu active'
            : 'nav-menu'
        }
      >
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggler">
            <Link to="#" className="MenuBar">
              <MdArrowBack onClick={showSideBar} className="closeIcons" />
            </Link>
          </li>
          <div className="To-Show-Menu">
            {NavBarData.map((item, id) => {
              let toShow = (
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              );

              if (item.title === 'Game') {
                toShow = (
                  <a href={item.path}>
                    <span>{item.title}</span>
                  </a>
                );
              }
              return (
                <li key={id} className={item.clName}>
                  {toShow}
                </li>
              );
            }, this)}
          </div>
        </ul>
      </nav>
    </div>
  );
}
