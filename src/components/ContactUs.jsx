import React, { useState } from "react";
/* eslint-disable */
import attachment from "../assets/attachment.svg";
import submit from "../assets/submit.svg";
import qoutes from "../assets/qoutes.svg";
import placeholder from "../assets/CEO.png";
import phone from "../assets/phone.svg";
import message from "../assets/message.svg";
import location from "../assets/location.svg";
import axios from "axios";

const ContactUs = ({ uiux }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [skype, setskype] = useState("");
  const [phone, setphone] = useState("");
  const [msg, setmsg] = useState("");

  const Apicall = async () => {
    console.log("test successfull" + name, email);

    await axios
      .post(
        "https://lozpdata.herokuapp.com/api/v1/contact/",
        {
          name: name,
          email: email,
          skype: skype,
          phone_number: phone,
          massage: msg,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  // console.log(name, email, skype, phone, msg);

  return (
    <div className="contactUs_container">
      <div className="contactUs_innerContainer">
        <div className="container-fluid">
          <div className="row">
            <div
              className={`pl-auto pl-sm-5 col-12 ${
                (uiux && "col-md-12") || "col-md-7"
              } mb-5 mb-md-0`}
            >
              <h1
                className={`${
                  (uiux && "text-center text-sm-left mx-auto ml-md-0") ||
                  "text-center"
                } mb-3 display-4`}
              >
                <span className="themeText">CONTACT</span> US
              </h1>
              <h6
                className={`${
                  (uiux && "text-center text-sm-left mx-auto ml-md-0") ||
                  "text-center m-auto"
                } text-secondary h5`}
              >
                Our team of more than 200 software experts can tailor our core
                services to fit your business requirements. And for those most
                complex of challenges, we’ll engage experts with a grounding in
                web applications and app development to guarantee success where
                 software expertise alone might not be enough. So, let us know
                how we can help you!
              </h6>
              <div className="mt-5">
                <div className="d-flex justify-content-between">
                  <input
                    type="text"
                    placeholder="Name"
                    className="contactInp w-100"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="contactInp w-100 ml-4"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <br />
                <div className="d-flex justify-content-between">
                  <input
                    type="text"
                    placeholder="Skype"
                    className="contactInp w-100"
                    value={skype}
                    onChange={(e) => setskype(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="contactInp w-100 ml-4"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>
                <br />
                <textarea
                  className="w-100"
                  cols="30"
                  rows={`${(uiux && "7") || "4"}`}
                  placeholder="Message"
                  value={msg}
                  onChange={(e) => setmsg(e.target.value)}
                ></textarea>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="d-flex align-items-center">
                  <img src={message} alt="message" />
                  <a
                    className="ml-2 h5 mb-0 text-decoration-none"
                    href="info@gmail.com"
                  >
                    info@gmail.com
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <img src={phone} alt="phone" />
                  <a
                    className="ml-2 h5 mb-0 text-decoration-none"
                    href="877596621"
                  >
                    877596621
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <img src={location} alt="location" />
                  <a
                    className="ml-2 h5 mb-0 text-decoration-none"
                    href="36 johar townn"
                  >
                    36 johar townn
                  </a>
                </div>
              </div>
              <div
                className={`d-flex ${
                  (uiux && "justify-content-center justify-content-md-start") ||
                  "justify-content-center"
                } align-items-center mt-5 imgContainer1 pointer`}
              >
                <img
                  style={{ width: uiux && "4%" }}
                  className="pointer"
                  src={attachment}
                  alt="attachment"
                />
                <div className="h2 ml-3">Add an Attachment</div>
              </div>
              <div
                className={`d-flex ${
                  (uiux && "justify-content-center justify-content-md-start") ||
                  "justify-content-center"
                } align-items-center mt-5`}
              >
                <input type="checkbox" id="news" className="mt-n2" />
                <label className="ml-3 h5 font-weight-bold" htmlFor="news">
                  I want to receive news and updates once in a while
                </label>
              </div>
              <div
                className={`d-flex ${
                  (uiux && "justify-content-center justify-content-md-start") ||
                  "justify-content-center"
                } align-items-center mt-5 imgContainer2`}
              >
                <button
                  className="themeBtn px-5 d-flex justify-content-center align-items-center"
                  onClick={Apicall}
                >
                  SUBMIT &nbsp;{" "}
                  <img className="ml-3" src={submit} alt="submit" />
                </button>
              </div>
            </div>
            {!uiux && (
              <div className="col-12 col-md-5 mt-5 mt-md-0">
                <div className="rightSide d-flex flex-column justify-content-center align-items-center text-center m-auto">
                  <img src={qoutes} alt="qoutes" />
                  <h5 className="text-white my-5 px-3">
                    It gives me great pleasure to welcome you to the world of
                    LozpData. Here you will find a comprehensive, in-depth
                    review of our company, reflecting the pride 200+ global
                    employees take in our ongoing growth and current success. It
                    also conveys our sense of mission and vision to become the
                    preferred world leader in development.
                  </h5>
                  <div>
                    <img
                      style={{ width: "40%" }}
                      src={placeholder}
                      alt="placholder"
                    />
                    <h3 className="text-white">Muhammad Rashid</h3>
                    <h5 className="text-white mt-n2">CEO</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
