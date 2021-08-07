import React from "react";
import web1 from "../assets/web-1.png";
import web2 from "../assets/web-2.png";
import web3 from "../assets/web-3.png";
import web4 from "../assets/gohar.png";
import web6 from "../assets/WEB-6.png";
import web7 from "../assets/web-9.png";
import web10 from "../assets/web-10.png";
import web11 from "../assets/web-11.png";
import web12 from "../assets/web-12.png";
import web13 from "../assets/web-13.png";

import { useHistory } from "react-router-dom";

const WhoWeAre = () => {
  let history = useHistory();

  return (
    <div className="whoWeAre_container">
      <div className="container-fluid text-center">
        <h1 className="text-center mb-4 display-4">
          <span className="themeText">WHO WE</span> ARE
        </h1>
        <h6 className="row text-center text-secondary">
          <div className="col-11 col-sm-10 col-md-8 m-auto">
            LozpData is the Software Development company leading the world’s
            enterprises, startups, and technology challenges. We help businesses
            elevate their value through custom software development, product
            design, QA, and consultancy services.
          </div>
        </h6>
        <br />
        <br />
        {/* original code  */}
        {/* <div className="imageContainer">
          <div className="d-flex justify-content-between px-5 px-md-0 my-5">
            <img src={web1} alt="placeholder" />
            <img src={web2} alt="placeholder" />
            <img src={web3} alt="placeholder" className="d-none d-sm-block" />
            <img src={web4} alt="placeholder" className="d-none d-sm-block" />
          </div>
          <div className="d-flex justify-content-between px-5 px-md-0 my-5">
            <img src={web6} alt="placeholder" />
          </div>
        </div> */}
        {/* original code  */}
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
            <div className="h3 text-primary ">Sr Full Stack Developer</div>
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
          <div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
            <img height='200px' width='200px' src={web4} alt="placeholder" /> <br /> <br />
            <div className="h3">
              {" "}
              <b>Gohar Ayoub </b>{" "}
            </div>
            <div className="h3 text-primary "> Sr React Js Developer </div>
          </div>
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
        <br />
        <br />
        <button
          onClick={() => history.push("/start_A_Project")}
          className="themeBtn mt-3"
        >
          lets talk
        </button>
      </div>
    </div>
  );
};

export default WhoWeAre;
