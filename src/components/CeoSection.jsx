import React from "react";
import image from "../assets/CEO.png";

const CeoSection = () => {
  return (
    <div className="ceoSection_container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 col-sm-5 col-md-4 mx-auto">
            <img style={{ width: "100%" }} src={image} alt="ceo" />
          </div>
          <div className="col-12 col-sm-9 mx-auto text-center">
            <br />
            <br />
            <br />
            <h3 className="themeText">CEO</h3>
            <br />
            <h4 className="h3 lightColor">
              It gives me great pleasure to welcome you to the world of
              LozpData. Here you will find a comprehensive, in-depth review of
              our company, reflecting the pride 200+ global employees take in
              our ongoing growth and current success. It also conveys our sense
              of mission and vision to become the preferred world leader in
              development.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoSection;
