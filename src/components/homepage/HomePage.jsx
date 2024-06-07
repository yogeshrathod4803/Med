import React from "react";
import "../homepage/HomePage.css";
import NavBar from "../navbar/NavBar";
import HeroImage from "../../assets/hero image.png";
import SearchBox from "../searchbox/SearchBox";
import Discount from "../discount/Discount";

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="container">
        <NavBar />
        <div className="hero-section">
          <div className="hero-tags">
            <div className="first-tag">
              <p className="tag-content">Skip the travel! Find Online</p>
              <p className="hero-tag">
                Medical <span className="hero-tag-part">Centers</span>
              </p>
            </div>
            <div className="info-tag">
              <p className="info-tag-para">
                Connect instantly with a 24x7 specialist or choose to
              </p>
              <p className="info-tag-para">video visit a particular doctor.</p>
            </div>
            <button className="btn">Find Center</button>
          </div>
          <div className="hero-image-container">
            <img src={HeroImage} alt="heroImage" />
          </div>
        </div>
        <div className="discount-container">
          <Discount />
        </div>
        <div className="searchBox">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
