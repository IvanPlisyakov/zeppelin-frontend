import React from 'react';
import './App.css';
import Main from '../Main/Main';
import ellipse from '../../images/ellipse.png';
import zeppelinLogo from '../../images/zeppelin-logo.png';
import closeWhite from '../../images/close_white.svg';

const menuList = [
  "Upcoming Events",
  "Tickets",
  "Experience",
  "Information",
]

function App() {

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  function handleMenuButton() {
    setMenuIsOpen(true);
  }

  function handleMenuCloseButton() {
    setMenuIsOpen(false);
  }

  return (
    <div className="app">
      <div className="app__column">
        <div className={`app__components ${menuIsOpen ? "visibility_hidden opacity_0" : "visibility_visible opacity_1 app__components_transition_delay"}`}>
          <Main />
        </div>
        <nav className={`app__menu ${!menuIsOpen ? "visibility_hidden opacity_0" : "visibility_visible opacity_1"}`}>
          {menuList.map((item, i) => {
            return <p className="app__menu-link link" style={{animation: menuIsOpen ? `app__menu-link_open ${i/4 + 1}s backwards` : `app__menu-link_close ${(4 - i)*2}s`}}>{item}</p>
          })}
        </nav>
        <div className={`app__menu-open link ${menuIsOpen ? "visibility_hidden opacity_0" : "visibility_visible opacity_1"}`} onClick={handleMenuButton}>
          <div className="app__menu-open-point"></div>
          <p className="app__menu-open-text">Menu</p>
        </div>
        <div className={`app__menu-close link ${!menuIsOpen ? "visibility_hidden opacity_0" : "visibility_visible opacity_1"}`} onClick={handleMenuCloseButton}>
          <img className="app__menu-close-img" src={closeWhite} alt="" />
        </div>
        <img className="app__logo link" src={zeppelinLogo} alt="" />
        <img className="app__ellipse" src={ellipse} alt="" />
      </div>
    </div>
  );
}

export default App;

//            return <p className="app__menu-link link" style={{animation: `${menuIsOpen ? "app__menu-link_open" : "app__menu-link_close"} ${menuIsOpen ? i/4 : (4 - i)*2}s`}}>{item}</p>
