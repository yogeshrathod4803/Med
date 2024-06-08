import React from "react";
import "./Domain.css";
import DrugStore from "../../assets/domain/Drugstore.svg";
import Stethoscope from "../../assets/domain/Stethoscope.svg";
import HeartRate from "../../assets/domain/Heart Rate.svg";
import HeartRateMonitor from "../../assets/domain/Heart Rate Monitor.svg";
import BloodSample from "../../assets/domain/Blood Sample.svg";
import Immune from "../../assets/domain/Immune.svg";
import X_Ray from "../../assets/domain/X-Ray.svg";

const Domain = () => {
  return (
    <div className="domain-container">
      <div className="info-tag">
        <p className="tag">Find by specialisation</p>
      </div>
      <div className="specialization">
        <div className="Fields">
          <img src={DrugStore} alt="Drug Store" className="fieldImg" />
          <p className="fieldName"> Dentistry</p>
        </div>
        <div className="Fields">
          <img src={Stethoscope} alt="Stethoscope" className="fieldImg" />
          <p className="fieldName"> Primary Care</p>
        </div>{" "}
        <div className="Fields">
          <img src={HeartRate} alt="HeartRate" className="fieldImg" />
          <p className="fieldName"> Cardiology</p>
        </div>{" "}
        <div className="Fields">
          <img
            src={HeartRateMonitor}
            alt="Heart Rate Monitor"
            className="fieldImg"
          />
          <p className="fieldName"> MRI Resonance</p>
        </div>{" "}
        <div className="Fields">
          <img src={BloodSample} alt="Blood Sample test" className="fieldImg" />
          <p className="fieldName"> Blood Test</p>
        </div>{" "}
        <div className="Fields">
          <img src={Immune} alt="Immune" className="fieldImg" />
          <p className="fieldName"> Piscologist</p>
        </div>{" "}
        <div className="Fields">
          <img src={DrugStore} alt="Laboratory" className="fieldImg" />
          <p className="fieldName"> Laboratory</p>
        </div>{" "}
        <div className="Fields">
          <img src={X_Ray} alt="X_Ray" className="fieldImg" />
          <p className="fieldName"> X-Ray</p>
        </div>
      </div>
      <button className="fieldsSelection">View All</button>
    </div>
  );
};

export default Domain;
