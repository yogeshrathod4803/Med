import React from "react";
import doctorIcon from "../../assets/doctors_icon.png";
import labIcon from "../../assets/lab_icon.png";
import hospitalsIcon from "../../assets/hospitals_icon.png";
import medicalStoreIcon from "../../assets/medicalStore_icon.png";
import ambulanceIcon from "../../assets/ambulance.png";
import "../searchbox/SearchBox.css";

const SearchBox = () => {
  return (
    <div className="searchBox-container">
      <div className="input-container">
        <input type="text" className="input-search" placeholder="state" />
        <input type="text" className="input-search" placeholder="city" />
        <button className="btn-search">Search</button>
      </div>
      <p className="suggestion-text ">You may be looking for</p>
      <div className="icon-container">
        <img src={doctorIcon} alt="doctorIcon" className="icon" />
        <img src={labIcon} alt="Labs" className="icon" />
        <img src={hospitalsIcon} alt="hospitalIcon" className="icon" />
        <img src={medicalStoreIcon} alt="Medical Stores" className="icon" />
        <img src={ambulanceIcon} alt="Ambulances" className="icon" />
      </div>
    </div>
  );
};

export default SearchBox;
