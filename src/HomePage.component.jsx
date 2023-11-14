import React from "react";
import "./HomePage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </div>

    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKATS</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </div>

    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </div>

    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMEN</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </div>

    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MENS</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;