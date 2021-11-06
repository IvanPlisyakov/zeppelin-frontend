import React from 'react';
import './Main.css';

function Main() {
  return (
    <section className="main">
      <div className="main__title">
        <h2 className="main__title-text">Ready to</h2>
        <div className="main__title-line"></div>
        <h2 className="main__title-text main__title-text_grid main__title-text_color_gold">hang out?</h2>
      </div>
      <p className="main__side-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus vel quam mauris quis in augue volutpat.</p>
      <div className="main__info">
        <div className="main__info-lines">
          <div className="main__info-line main__info-line_1"></div>
          <div className="main__info-line main__info-line_2"></div>
        </div>
        <p className="main__info-address">253 Great Western Road Aberdeen, Scotland</p>
        <p className="main__info-contacts">info@zeppelinevent.com +1 (305) 741-4736</p>
      </div>
    </section>
  );
}

export default Main;