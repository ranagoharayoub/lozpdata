import React, { useState } from "react";
import web1 from "../assets/web-1.png";
import web2 from "../assets/web-2.png";
import web3 from "../assets/web-3.png";
import web4 from "../assets/web-4.png";
import web6 from "../assets/WEB-6.png";
import placeholder2 from "../assets/placeholder2.svg";
import web7 from "../assets/web-9.png";
import web10 from "../assets/web-10.png";
import web11 from "../assets/web-11.png";
import web12 from "../assets/web-12.png";
import web13 from "../assets/web-13.png";

const OurTeam = () => {
  const [teamNav, setTeamNav] = useState(false);
  return (
    <div className="ourTeam_container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="themeText text-center mb-4">
              OUR TEAM /OUR EXPERTS
            </h1>
            <div className="ourTeamBtn row justify-content-center">
              <div>
                <button
                  onClick={() => setTeamNav(false)}
                  className="mr-4 pb-1 lightColor"
                >
                  LEADER
                </button>
                {!teamNav && <div className="underLine ml-3"></div>}
              </div>
              <div>
                {/* <button
                  onClick={() => setTeamNav(true)}
                  className="ml-4 pb-1 lightColor"
                >
                  ADVISORS
                </button> */}
                {teamNav && <div className="underLine ml-5"></div>}
              </div>
            </div>
            {/* LEADER SECTION START */}
            {/* row justify-content-center mt-2 mt-sm-5 */}
            {!teamNav && (
              <div className="row justify-content-center mt-2 mt-sm-5">
                <div className="col-6 col-md-3 text-right text-md-center mt-5">
                  <img src={web13} alt="placeholder" />
                  <br /> <br />
                  <div className="h3">
                    {" "}
                    <b>Usman Arshad </b>{" "}
                  </div>
                  <div className="h3 text-primary ">Sr Django Developer</div>
                </div>
                <div className="col-6 col-md-3 text-right text-md-center mt-5">
                  <img src={web6} alt="placeholder" />
                  <br /> <br />
                  <div className="h3">
                    {" "}
                    <b>Saad Khalid </b>{" "}
                  </div>
                  <div className="h3 text-primary ">
                    Sr Full Stack Developer
                  </div>
                </div>

                <div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
                  <img src={web2} alt="placeholder" /> <br /> <br />
                  <div className="h3">
                    {" "}
                    <b>Nuh Ali Dar </b>{" "}
                  </div>
                  <div className="h3 text-primary "> Sr UI/UX Designer </div>
                </div>
                <div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
                  <img src={web3} alt="placeholder" /> <br /> <br />
                  <div className="h3">
                    {" "}
                    <b>M Ali Haider </b>{" "}
                  </div>
                  <div className="h3 text-primary "> HR Manager </div>
                </div>
                <div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
                  <img src={web1} alt="placeholder" /> <br /> <br />
                  <div className="h3">
                    {" "}
                    <b>Abdul Rehman</b>{" "}
                  </div>
                  <div className="h3 text-primary "> Jr Django Developer </div>
                </div>
                {/* <div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
            <img src={web4} alt="placeholder" /> <br /> <br />
            <div className="h3">
              {" "}
              <b>M Shahid </b>{" "}
            </div>
            <div className="h3 text-primary "> Senior Flutter Developer </div>
          </div> */}
                <div className="col-6 col-md-3 text-right text-md-center mt-5">
                  <img src={web7} alt="placeholder" />
                  <br /> <br />
                  <div className="h3">
                    {" "}
                    <b>Malik Asjad</b>{" "}
                  </div>
                  <div className="h3 text-primary ">Jr React Native</div>
                </div>
                <div className="col-6 col-md-3 text-right text-md-center mt-5">
                  <img src={web10} alt="placeholder" />
                  <br /> <br />
                  <div className="h3">
                    {" "}
                    <b>Fatima Khalid </b>{" "}
                  </div>
                  <div className="h3 text-primary ">Front-End Developer</div>
                </div>
                <div className="col-6 col-md-3 text-right text-md-center mt-5">
                  <img src={web11} alt="placeholder" />
                  <br /> <br />
                  <div className="h3">
                    {" "}
                    <b>Hasan Iqbal </b>{" "}
                  </div>
                  <div className="h3 text-primary ">Sales Engineer</div>
                </div>
                <div className="col-6 col-md-3 text-right text-md-center mt-5">
                  <img src={web12} alt="placeholder" />
                  <br /> <br />
                  <div className="h3">
                    {" "}
                    <b>Muhammad Ansab Iqbal </b>{" "}
                  </div>
                  <div className="h3 text-primary ">Jr React Js Developer</div>
                </div>
              </div>
            )}
            {/* LEADER SECTION END */}

            {/* ADVISOR SECTION START */}
            {/* {teamNav && (
              <div className="row justify-content-center mt-2 mt-sm-5">
                <div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
                  <img src={placeholder2} alt="placeholder2" />
                </div>
                <div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
                  <img src={placeholder2} alt="placeholder2" />
                </div>
                <div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
                  <img src={placeholder2} alt="placeholder2" />
                </div>
                <div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
                  <img src={placeholder2} alt="placeholder2" />
                </div>
                <div className="col-6 col-md-3 text-right text-md-center mt-5">
                  <img src={placeholder2} alt="placeholder2" />
                </div>
                <div className="col-6 col-md-3 text-left text-md-center mt-5">
                  <img src={placeholder2} alt="placeholder2" />
                </div>
                <div className="col-6 col-md-3 text-right text-md-center mt-5">
                  <img src={placeholder2} alt="placeholder2" />
                </div>
                <div className="col-6 col-md-3 text-left text-md-center mt-5">
                  <img src={placeholder2} alt="placeholder2" />
                </div>
              </div>
            )} */}
            {/* ADVISOR SECTION END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
