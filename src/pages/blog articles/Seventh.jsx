import React from "react";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import { useHooks } from "../../Hooks/useHooks";
//import './Webdev.css';
import Imgsld from "../../components/webdev/Imgsld";
import GetConnected from "../../components/GetConnected";

import Image from "../../assets/seventh2.png";

export default function Sixth() {
  const { isOpen, OnClick } = useHooks();
  return (
    <>
      <MainHeader ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      <div className="aboutUsHeader_container container-fluid d-flex flex-column justify-content-left align-items-left text-white">
        <br /> <br /> <br />
        <h1 className="pl-5 mt-5 pt-5 align-self-center">
          WHY QUALITY ASSURANCE IS IMPORTANT IN SOFTWARE DEVELOPMENT
        </h1>
        <h4 className="row">
          <div className="ml-5 p-10 text-justify align-self-center display: inline block">
            When It Comes To Website Development, We Push The Limits And Set New
            Standards By Creating Functionally Rich And Aesthetically Stunning
            Websites. Best-In-Class UX And Compelling
          </div>
        </h4>
        <div className="ml-3 ml-sm-5 mt-n1 py-2 imgContainer">
          <span className="ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43.093"
              height="43.093"
              viewBox="0 0 43.093 43.093"
            >
              <path
                id="linkedin_1_"
                data-name="linkedin (1)"
                d="M39.985,0H3.108A3.108,3.108,0,0,0,0,3.108V39.985a3.108,3.108,0,0,0,3.108,3.108H39.985a3.108,3.108,0,0,0,3.108-3.108V3.108A3.108,3.108,0,0,0,39.985,0Zm-24.7,32.572H10.038V16.785h5.248ZM12.662,14.629h-.034A2.735,2.735,0,1,1,12.7,9.174a2.736,2.736,0,1,1-.035,5.455ZM34.207,32.572H28.96V24.126c0-2.123-.76-3.57-2.658-3.57a2.873,2.873,0,0,0-2.692,1.919,3.594,3.594,0,0,0-.173,1.281v8.816H18.189s.069-14.306,0-15.787h5.247V19.02a5.21,5.21,0,0,1,4.729-2.606c3.452,0,6.041,2.256,6.041,7.105Zm0,0"
                transform="translate(0)"
                fill="#fff"
              />
            </svg>{" "}
          </span>

          <span className="ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42.838"
              height="42.838"
              viewBox="0 0 42.838 42.838"
            >
              <path
                id="facebook_3_"
                data-name="facebook (3)"
                d="M0,0V42.838H42.838V0ZM28.339,11.789H24.991a1.449,1.449,0,0,0-1.333,1.2V16.4h4.674c-.188,2.618-.575,5.012-.575,5.012H23.635V36.248H17.49V21.409H14.5V16.417H17.49V12.335c0-.746-.151-5.744,6.3-5.744H28.34v5.2Z"
                fill="#fff"
                fill-rule="evenodd"
              />
            </svg>
          </span>

          <span className="ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43.004"
              height="43.004"
              viewBox="0 0 43.004 43.004"
            >
              <path
                id="twitter"
                d="M39.9,0H3.1A3.1,3.1,0,0,0,0,3.1V39.9A3.1,3.1,0,0,0,3.1,43H39.9A3.1,3.1,0,0,0,43,39.9V3.1A3.1,3.1,0,0,0,39.9,0ZM31.319,16.765q.014.317.014.638A13.947,13.947,0,0,1,17.291,31.445h0a13.97,13.97,0,0,1-7.565-2.217A10.038,10.038,0,0,0,10.9,29.3a9.9,9.9,0,0,0,6.13-2.113,4.941,4.941,0,0,1-4.611-3.428,4.919,4.919,0,0,0,2.229-.085,4.937,4.937,0,0,1-3.959-4.838c0-.022,0-.042,0-.063a4.9,4.9,0,0,0,2.235.617A4.939,4.939,0,0,1,11.4,12.8a14.012,14.012,0,0,0,10.173,5.157,4.938,4.938,0,0,1,8.41-4.5,9.9,9.9,0,0,0,3.134-1.2,4.955,4.955,0,0,1-2.17,2.73,9.843,9.843,0,0,0,2.834-.777,10.029,10.029,0,0,1-2.462,2.556Zm0,0"
                transform="translate(0)"
                fill="#fff"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="getConnected_container d-flex justify-content-center align-items-center mx-auto">
        <h2 className="pl-5 pr-3 pr-sm-5 py-2">Home</h2>
        <h2 className="pl-5 pr-3 pr-sm-5 py-2">
          <svg
            id="Group_165"
            data-name="Group 165"
            xmlns="http://www.w3.org/2000/svg"
            width="10.699"
            height="18.213"
            viewBox="0 0 10.699 18.213"
          >
            <path
              id="Path_327"
              data-name="Path 327"
              d="M101.769,8.4l8.1-8.1a1,1,0,0,1,1.409,0l.6.6a1,1,0,0,1,0,1.409L105.073,9.1l6.813,6.814a1,1,0,0,1,0,1.409l-.6.6a1,1,0,0,1-1.409,0L101.769,9.81a1.006,1.006,0,0,1,0-1.414Z"
              transform="translate(-101.478 0)"
              fill="#2365b1"
            />
          </svg>
        </h2>
        <h2 className="pl-5 pr-3 pr-sm-5 py-2">Blog</h2>
        <h2 className="pl-5 pr-3 pr-sm-5 py-2">
          <svg
            id="Group_165"
            data-name="Group 165"
            xmlns="http://www.w3.org/2000/svg"
            width="10.699"
            height="18.213"
            viewBox="0 0 10.699 18.213"
          >
            <path
              id="Path_327"
              data-name="Path 327"
              d="M101.769,8.4l8.1-8.1a1,1,0,0,1,1.409,0l.6.6a1,1,0,0,1,0,1.409L105.073,9.1l6.813,6.814a1,1,0,0,1,0,1.409l-.6.6a1,1,0,0,1-1.409,0L101.769,9.81a1.006,1.006,0,0,1,0-1.414Z"
              transform="translate(-101.478 0)"
              fill="#2365b1"
            />
          </svg>
        </h2>
        <h2 className="pl-5 pr-3 pr-sm-5 py-2">
          WHY QUALITY ASSURANCE IS IMPORTANT IN SOFTWARE DEVELOPMENT
        </h2>
      </div>

      {/* <Storyy /> */}
      <div className="ourStory_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-7 align-self-center">
              <h1>
                <span className="themeText"> OUR </span> STORIES
              </h1>

              <h5 className="h3 text">
                {" "}
                <b>WHAT IS QA?</b>{" "}
              </h5>
              <h5 className="h3 text-secondary">
                QA is an umbrella term that covers all aspects of guaranteeing a
                high-quality software product. It includes creating processes
                for each stage of development to reduce flaws and bugs during
                the build, as well as measuring the quality of the software.
              </h5>
              <h5 className="h3 text-secondary">
                The QA department is responsible for reducing the probability of
                bugs occurring during development through carefully thought-out
                processes, as well as identifying any errors that do come up
                during the build and fixing them. It is essential for creating
                superior products that are free from bugs.
              </h5>

              <h5 className="h3">
                {" "}
                <b>ROLE OF QA IN SOFTWARE DEVELOPMENT</b>{" "}
              </h5>
              <h5 className="h3 text-secondary">
                A QA team, working on a piece of software, will work with a
                Solution Architect to identify the requirements, define the
                parameters that determine if the product meets their needs, and
                create a set of testing cases and scripts. These are then used
                to ensure that the client is getting what they want.
              </h5>
              <h5 className="h3 text-secondary">
                The team also supervises the execution of these test cases and
                scripts and will perform manual testing to ensure that they are
                all working as required, without any bugs. They also test the
                final product before it is handed over to the client as part of
                quality control.
              </h5>

              <h5 className="h3">
                {" "}
                <b>IMPORTANCE OF QA IN SOFTWARE DEVELOPMENT</b>{" "}
              </h5>
              <h5 className="h3">
                {" "}
                <b>SAVES TIME & MONEY</b>{" "}
              </h5>
              <h5 className="h3 text-secondary">
                The pros of having systems and processes in place during
                development are that they anticipate and prevent most bugs and
                errors from developing in the first place. As a result, the
                errors that do surface are relatively minor and can be fixed
                easily.
              </h5>
              <h5 className="h3 text-secondary">
                On the other hand, without QA, most bugs would potentially be
                bigger and may only be caught in the testing phase, or after the
                program was released. Fixing these bugs after the fact would
                require more time, which in turn could cost more.
              </h5>
            </div>
            <div className="col-11 col-sm-5 mx-auto mt-5 mt-sm-0">
              <img style={{ width: "100%" }} src={Image} alt="our_story" />
            </div>
          </div>
        </div>
      </div>

      {/* <Para /> */}
      <div className="ourStory_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-10">
              <h3 className="h3">
                <b>MAINTAINS PRODUCT QUALITY</b>
              </h3>
              <h5 className="h3">
                QA processes are designed to ensure that the software product
                works reliably and is stable. In addition, there are Quality
                Control tests designed to test the functionality, performance,
                security, usability, and more.
              </h5>
              <h5 className="h3">
                Furthermore, these tests also consider the fact that the user
                might not use the program as it was intended. Part of this
                testing is to unassailable the product so that improper use does
                cause failure.
              </h5>
              <h5 className="h3">
                As a result, the final product has minimal defects and is
                guaranteed to work as intended.
              </h5>

              <h3 className="h3">
                <b>ENSURES SECURITY</b>
              </h3>
              <h5 className="h3">
                Whilst a software program might perform all functions as
                required, it may not necessarily be completely secure. If there
                is any weakness in its defenses, the product and user data could
                be compromised.
              </h5>
              <h5 className="h3">
                One of the reasons QA is so important in software development is
                to ensure that your product is built with security in mind and
                has been tested properly to ensure that the safeguards in place
                work.
              </h5>

              <h3 className="h3">
                <b>PROTECTS YOUR REPUTATION</b>
              </h3>
              <h5 className="h3">
                The quality of your software can reflect on your company and
                brand. By releasing a high-quality product that offers excellent
                features with comprehensive security, you can build a positive
                reputation for your business.
              </h5>
              <h5 className="h3">
                This is where the importance of QA in software development is
                most effective. It ensures that your product serves as a fitting
                brand ambassador for your business.
              </h5>

              <h3 className="h3">
                <b>CUSTOMER SATISFACTION</b>
              </h3>
              <h5 className="h3">
                To ensure satisfied customers, your product needs to fulfill
                their requirements. It should have all the features required and
                work properly. The role of QA is exactly that to make sure that
                the software gives your customers exactly what they expect.
              </h5>
              <h5 className="h3">
                The QA team would define the features of the deliverables and
                then work through each step of the development process to ensure
                that they are being delivered. They then check to see if the
                software works smoothly and without any problems. As a result,
                customers get a quality product that they are happy to use.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 px-2">
        <h1 className="themeText font-weight-bold">Related Articles</h1>
      </div>
      <Imgsld />
      <GetConnected />
      <ContactUs />
      <Footer />
    </>
  );
}
