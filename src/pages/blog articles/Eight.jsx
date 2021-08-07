import React from "react";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import { useHooks } from "../../Hooks/useHooks";
//import './Webdev.css';
import Imgsld from "../../components/webdev/Imgsld";
import GetConnected from "../../components/GetConnected";

import Image from "../../assets/eight2.png";
import ionic from "../../blogimg/ionic.png";

import react from "../../blogimg/react.jpg";
import xamarin from "../../blogimg/xamarin.png";
import flutter from "../../blogimg/flutter.png";
import phonegap from "../../blogimg/phonegap.jpg";
import jq from "../../blogimg/jq.png";
import native from "../../blogimg/native.png";
import mobang from "../../blogimg/mobang.jpeg";
import appcel from "../../blogimg/appcel.png";
import dotnet from "../../blogimg/dotnet.png";
import exp from "../../blogimg/exp.png";
import django from "../../blogimg/django.png";
import ror from "../../blogimg/ror.png";
import spr from "../../blogimg/spr.png";
import lar from "../../blogimg/lar.png";
import angu from "../../blogimg/angu.png";
import reactjs from "../../blogimg/reactjs.png";
import vue from "../../blogimg/vue.png";
import ember from "../../blogimg/ember.png";
import backbone from "../../blogimg/backbone.jpg";

export default function Eight() {
  const { isOpen, OnClick } = useHooks();
  return (
    <>
      <MainHeader ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      <div className="aboutUsHeader_container container-fluid d-flex flex-column justify-content-left align-items-left text-white">
        <br /> <br /> <br />
        <h1 className="pl-5 mt-5 pt-5 align-self-center">
          BEST FRAMEWORKS FOR APP DEVELOPMENT WHAT IS A FRAMEWORK ?
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
          BEST FRAMEWORKS FOR APP DEVELOPMENT WHAT IS A FRAMEWORK ?
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

              <h5 className="h3 text-secondary">
                In-app development, software development, and web development,
                frameworks are code libraries with common functions defined.
                This way, the user only needs a short line of code to accomplish
                what would otherwise have needed long pieces of code. This helps
                speed up the development process for programmers.
              </h5>
              <h5 className="h3 text-secondary">
                A good example of a framework would be .NET Core, an open-source
                framework by Microsoft. This framework is great for building
                apps for the common operating systems, Windows, Mac OS, and
                Linux as long as you’re comfortable working with C#.
              </h5>

              <h5 className="h3">
                {" "}
                <b>DIFFERENT TYPES OF APP</b>{" "}
              </h5>
              <h5 className="h3 text-secondary">
                Apps, or software applications, are categorized by different
                criteria, some of which are:
              </h5>
              <h5 className="h3">
                {" "}
                <b>By Platform: </b>{" "}
              </h5>
              <h5 className="h3">
                <ul>
                  <li>
                    <b>Initiation:</b> at this stage, the goals of the project
                    should be distinguished. Questions, for example, "for what
                    reason is this project required?" should be replied to.
                    Then, a project proposal and a business plan must be written
                    as well as carrying out a thorough feasibility study of the
                    project.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Definition:</b>a project plan must be built at this
                    stage. Also, the objectives of the project are finalized and
                    the requirements for an effective project are classified.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Design: </b>This step of an IT project contains creating
                    multiple designs and prototypes, and then a unique design
                    must be chosen as well as creating specifications for the
                    development team.
                  </li>{" "}
                  <br />
                </ul>
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
                <b>By Operating System:</b>
              </h3>
              <h5 className="h3 text">
                <ul>
                  <li>Windows or Android</li>
                  <li>Mac OS or iOS</li>
                  <li>Cross-platform</li>
                </ul>
              </h5>

              <h3 className="h3">
                <b>By Use:</b>
              </h3>
              <h5 className="h3 text">
                <ul>
                  <li>Frontend</li>
                  <li>Backend</li>
                </ul>
              </h5>

              <h3 className="h3">
                <b>BEST FRAMEWORKS FOR MOBILE APP DEVELOPMENT</b>
              </h3>
              <h5 className="h3">
                If you are developing a mobile app, you want to consider whether
                it’s going to be for an Android platform or iOS. Most native
                mobile apps are done using frameworks created or owned by the
                company that owns the mobile platform.
              </h5>
              <h5 className="h3">
                However, developing two separate app versions for iOS and
                Android can be quite expensive. Since most apps are meant for
                both platforms, it is more efficient to use a cross-platform
                development framework.
              </h5>

              <h5 className="h3 text">
                <ul>
                  <li>
                    <b>IONIC: </b>Ionic is a free client-side framework using
                    HTML, CSS3, and JavaScript.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{
                          width: "50%",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                        src={ionic}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>REACT NATIVE: </b>React Native is an open-source
                    framework developed by Facebook using JavaScript ideal for
                    creating apps for both iOS and Android platforms.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={react}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>XAMARIN: </b>A Microsoft product, Xamarin uses C# and can
                    be used to develop apps for Windows, Android, and iOS.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={xamarin}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>FLUTTER: </b> Another open-source framework, Flutter is a
                    Google product. It is used for cross-platform and hybrid
                    apps using the Dart language.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={flutter}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>ADOBE PHONEGAP: </b>Adobe PhoneGap is a cross-platform
                    app development framework that uses HTML5, CSS, and
                    JavaScript.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={phonegap}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>JQUERY MOBILE: </b> The jQuery Mobile app development
                    framework can be used for both website building and mobile
                    apps. It can also be used for all kinds of platforms,
                    including Windows, Mac OS, Blackberry, Firefox, and Kindle.
                    <div className="blogBody_card mt-10">
                      <img style={{ width: "50%" }} src={jq} alt="our_story" />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>NATIVE SCRIPT: </b> Developed by a Bulgarian company, the
                    Native Script framework is useful for creating hybrid apps.
                  </li>
                  <div className="blogBody_card mt-10">
                    <img
                      style={{ width: "50%" }}
                      src={native}
                      alt="our_story"
                    />
                  </div>
                  <br />
                  <li>
                    <b>MOBILE ANGULAR UI: </b> Mobile Angular UI uses elements
                    of Angular JS and Twitter Bootstrap to create a Mobile app
                    UI.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={mobang}
                        alt="our_story"
                      />
                    </div>
                  </li>
                  <br />
                  <li>
                    <b>APPCELERATOR: </b> Appcelerator is a one-stop shop for
                    creating native mobile apps using JavaScript. It can be used
                    to build apps, connect them to any database, and includes
                    analytics.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={appcel}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                </ul>
              </h5>

              <h3 className="h3">
                <b>BEST FRAMEWORKS FOR WEB DEVELOPMENT</b>
              </h3>
              <h5 className="h3">Web apps tend to have two aspects:</h5>
              <h5 className="h3">
                <ul>
                  <li>Client-side (or front-end)</li>
                  <li>Server-side (or back-end)</li>
                </ul>
              </h5>
              <br />

              <h3 className="h3">
                <b>BEST BACK-END FRAMEWORKS</b>
              </h3>
              <h5 className="h3 text">
                {" "}
                <br />
                <ul>
                  <li>
                    <b>.NET Core: </b>.NET Core is the upgraded replacement of
                    the .NET Framework. This open-source system was developed by
                    Microsoft but allows cross-platform app development. This
                    versatile framework, used for device, cloud, and IoT
                    applications, has one of the largest user bases of all
                    frameworks. This includes us at DCSL, where .NET Core is
                    used extensively for backend application development.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={dotnet}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>EXPRESS: </b>Express uses Node.js and offers a quick way
                    of creating a web app back-end.
                    <div className="blogBody_card mt-10">
                      <img style={{ width: "50%" }} src={exp} alt="our_story" />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>DJANGO: </b>Django is a framework that is used by some of
                    the giants in the industry, including the two of the biggest
                    search engines and a popular social media platform. It uses
                    Python to build highly secure websites.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={django}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>RAILS: </b> A framework loved by developers; Rails offers
                    beginners several resources that make Ruby-powered back-end
                    development very easy.
                    <div className="blogBody_card mt-10">
                      <img style={{ width: "50%" }} src={ror} alt="our_story" />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>SPRING: </b>Spring uses Java, and offers support for SQL
                    and NoSQL, making it a popular choice for many web
                    developers. It is, however, not as beginner-friendly as the
                    previous two frameworks.
                    <div className="blogBody_card mt-10">
                      <img style={{ width: "50%" }} src={spr} alt="our_story" />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>LARAVEL: </b> Laravel is another popular framework ‘for
                    beautiful code’ that is quite new. It uses PHP, and like
                    Rails, is easy for beginners to use.
                    <div className="blogBody_card mt-10">
                      <img style={{ width: "50%" }} src={lar} alt="our_story" />
                    </div>
                  </li>{" "}
                  <br />
                </ul>
              </h5>

              <h3 className="h3">
                <b>BEST FRONT-END FRAMEWORKS</b>
              </h3>
              <h5 className="h3 text">
                <ul>
                  <li>
                    <b>ANGULAR: </b>Angular is a front-end framework that
                    originally used JavaScript but now uses Typescript to create
                    frontend web applications.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={angu}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>REACT: </b>While React is considered a framework, it is a
                    JavaScript library. That does not prevent it from making
                    both client-side and server-side web applications.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={reactjs}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>VUE: </b>Vue.js is another JavaScript framework that is
                    fast becoming popular, including here at DCSL. The ecosystem
                    is geared for building complete client-side web
                    applications.
                    <div className="blogBody_card mt-10">
                      <img style={{ width: "50%" }} src={vue} alt="our_story" />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>EMBER: </b> Ember is a JavaScript-based framework that is
                    optimized for productivity and efficiency.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={ember}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                  <li>
                    <b>BACKBONE: </b>If you want to build a rich single-page web
                    app, Backbone is the perfect framework. It is very light and
                    offers a rich ecosystem.
                    <div className="blogBody_card mt-10">
                      <img
                        style={{ width: "50%" }}
                        src={backbone}
                        alt="our_story"
                      />
                    </div>
                  </li>{" "}
                  <br />
                </ul>
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
