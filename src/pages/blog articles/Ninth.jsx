import React from "react";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import { useHooks } from "../../Hooks/useHooks";
//import './Webdev.css';
import Imgsld from "../../components/webdev/Imgsld";
import GetConnected from "../../components/GetConnected";

import Image from "../../assets/ninth2.png";

export default function Ninth() {
  const { isOpen, OnClick } = useHooks();
  return (
    <>
      <MainHeader ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      <div className="aboutUsHeader_container container-fluid d-flex flex-column justify-content-left align-items-left text-white">
        <br /> <br /> <br />
        <div>
          <h1 className="pl-5 mt-5 pt-5 align-self-center">
            BENEFITS OF HYBRID MOBILE APP DEVELOPMENT
          </h1>
          <h4 className="row">
            <div className="ml-5 p-10 text-justify align-self-center display: inline block">
              When It Comes To Website Development, We Push The Limits And Set
              New Standards By Creating Functionally Rich And Aesthetically
              Stunning Websites. Best-In-Class UX And Compelling
            </div>
          </h4>
        </div>
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
          BENEFITS OF HYBRID MOBILE APP DEVELOPMENT
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

              {/* className="h3 text-secondary */}

              <p className="h3 text">
                Digital marketing on mobile devices is predominant to any online
                brand marketing strategy since people using their smart devices
                are increasing wildly. This is why companies trying to engage
                and charm more customers must have to adopt this global trend,
                or else they will be kicked out of competition. For this purpose
                to serve better, businesses can think of building either
                platform-specific native applications or hybrid apps that work
                across multiple platforms.
              </p>
              <h5 className="h3 text">
                Digital marketing on mobile devices is predominant to any online
                brand marketing strategy since people using their smart devices
                are increasing wildly. This is why companies trying to engage
                and charm more customers must have to adopt this global trend,
                or else they will be kicked out of competition. For this purpose
                to serve better, businesses can think of building either
                platform-specific native applications or hybrid apps that work
                across multiple platforms.
              </h5>
              <h5 className="h3  ">
                Marketing leaders often emphasize going hybrid because it
                requires a single version of the app that functions across
                multiple devices and platforms. This is the best way to engage
                the majority of target customers. With hybrid apps now becoming
                extremely dominant in 2018, we have a convincing excuse to
                explore its eminent advantages.
              </h5>

              <h5 className="h2">
                {" "}
                <b>LOW COST WITH EASE OF DEVELOPMENT</b>{" "}
              </h5>
              <h5 className="h3 ">
                Due to the integrated development of hybrid mobile apps,
                businesses will not have to spend separately for building
                multiple versions of apps for multiple platforms. Instead,
                hybrid frameworks allow developers to build a single version and
                write and maintain individual code bases for various platforms.
                This approach saves a significant amount of money for small
                companies that want to save big and attract more revenue.
              </h5>
              <h5 className="h3">
                Companies who want to beat other businesses and hit the market
                first can release the MVP before competitors do. This results in
                introducing reliable solutions much faster, resulting in an
                absolute competitive advantage.
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
                <b>NATIVE EXPERIENCE</b>
              </h3>
              <h5 className="h3">
                Although native app delivers amazing user experience, a hybrid
                app does provide the most of what native UX offers along with
                keeping the back-end structure simple. You can go for
                comprehensive development frameworks to build a hybrid app UX
                that effectively connects vice-specific functionalities. This UX
                remains seamless even while working on fixes and updates across
                all platforms. Users of hybrid apps experience a fluid native
                feel and no difference as they shift from one device platform to
                another.
              </h5>

              <h3 className="h3">
                <b>PROVIDES HGH SPEED PERFORMANCE</b>
              </h3>
              <h5 className="h3">
                Hybrid mobile applications offer a more high-speed performance
                than websites and mobile web apps and run smoothly on any
                operating system even with a high load of users or content.
              </h5>
              <h5 className="h3">
                What better example of this than the Twitter mobile application
                that handles overwhelming amounts of traffic and content at all
                times.{" "}
              </h5>

              <h3 className="h3">
                <b>FEWER APP STORE LIMITATIONS</b>
              </h3>
              <h5 className="h3">
                Not only do hybrid apps take less time to be developed, but they
                also take less time to be deployed. App stores like Apple’s or
                Google’s require a considerable amount of time for validation
                once a new app or an update is submitted. With a hybrid app,
                developers can avoid this delay, especially if they require
                updating their app frequently as it is not necessary to resubmit
                the new version of the app if the native code has not been
                modified in the update. This means they can quickly roll out new
                updates without waiting out the validation period.{" "}
              </h5>

              <h3 className="h3">
                <b>ATTRACTIVE UX/UI</b>
              </h3>
              <h5 className="h3">
                Hybrid mobile applications deliver high-speed performance and
                quick loading time which results in a superior user experience.
                It also offers a consistent and flawless experience across the
                web, Android, and iOS devices in terms of design and user
                interface. The UI of hybrid apps looks like an extension of the
                web app in terms of design and layout, which improves the
                experience of users.{" "}
              </h5>
              <h5 className="h3">
                For instance, the hybrid application for Netflix has a
                consistent user interface across every device. It is because it
                uses the same code base to run UI on all devices mobile, tablet,
                smart TVs, DVD players, etc.{" "}
              </h5>

              <h3 className="h3">
                <b>EASY TO MAINTAIN</b>
              </h3>
              <h5 className="h3">
                The process of updating hybrid apps and adding new features to
                them is comparatively easier than updating native applications.
                While the testing process is time-consuming since it involves
                testing changes on browsers and web views on the different
                platforms, these changes are easier to roll out and maintain.
                Unlike high-maintenance native apps that require new versions to
                be rolled out with each update, hybrid apps do not need
                versioning. This makes maintenance as simple as updating a web
                page. It not only saves the effort of the development team but
                also saves users from having to update their apps with every new
                update rollout.
              </h5>

              <h3 className="h3">
                <b>CONCLUSION</b>
              </h3>
              <h5 className="h3">
                The hybrid application offers the best of both worlds. It not
                only delivers high-speed performance and consistent UI/UX but
                also saves time, cost, and efforts of the development team. If
                you are a small-scale startup with a limited development budget
                or you want to develop and release your mobile application in a
                short amount of time, then hybrid app development is the right
                approach for you. Or if you are a company, like Facebook and
                Netflix, that is dominant in the existing web market and has a
                sizeable amount of content and user base, then going the route
                of hybrid app development is also the smartest choice.
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
