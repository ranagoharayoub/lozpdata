import React from "react";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import { useHooks } from "../../Hooks/useHooks";
//import './Webdev.css';
import Imgsld from "../../components/webdev/Imgsld";
import GetConnected from "../../components/GetConnected";

import Image from "../../assets/fifth.png";

export default function Fifth() {
  const { isOpen, OnClick } = useHooks();
  return (
    <>
      <MainHeader ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      <div className="aboutUsHeader_container container-fluid d-flex flex-column justify-content-left align-items-left text-white">
        <br /> <br /> <br />
        <h1 className="pl-5 mt-5 pt-5 align-self-center">
          JOBS THAT TECHNOLOGY WILL REPLACE
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
          JOBS THAT TECHNOLOGY WILL REPLACE
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
                When computers first started becoming popular, people thought
                that they might ‘take away jobs’. Whilst in some instances this
                has been the case, for safety or efficiency reasons, there are
                now several roles that are created due to technology.
              </h5>
              <h5 className="h3 text-secondary">
                Artificial Intelligence and robotics are getting more and more
                refined, so it'd only be a matter of your time before they're
                widely implemented across various industries.
              </h5>
              <h5 className="h3 text-secondary">
                Low-paying roles that involve routine and repetitive tasks might
                be replaced with technology as to how of preventing user error.
                When completing an equivalent task over and once again humans
                tend to become careless, whereas a computer can perform them
                repeatedly without making mistakes. Computers also are far
                better at sifting through data to urge meaningful results
                quickly and efficiently, so that they might be wont to replace
                roles where analysis is required. They can also find patterns
                that the human eye might miss.
              </h5>

              <h5 className="h3">
                <b>Which Jobs Could be Replaced by Technology?</b>
              </h5>
              <h5 className="h3">
                <b>RETAIL WORKERS</b>
              </h5>
              <h5 className="h3 text-secondary">
                Online sales are getting more and more popular because it's
                easier to order something online and have it delivered than to
                travel out, look for the proper product in a store, and risk not
                finding it. Self-checkouts are already a longtime option in many
                stores, so it'd be very possible that within the future, we
                don’t need retail workers in the least.
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
              <h5 className="h3">
                {" "}
                <b>MEDICAL DIAGNOSTICIANS</b>{" "}
              </h5>
              <h5 className="h3">
                Whether it's detecting the danger of heart attacks or correctly
                identifying cancer from X-rays, AI seems better equipped at
                spotting critical medical information than humans. With such a
                high success rate already, it's possible that technology could
                replace people with the role of identifying diseases within the
                future.
              </h5>

              <h5 className="h3">
                {" "}
                <b>PROOFREADERS</b>{" "}
              </h5>
              <h5 className="h3">
                Writing is a job that is considered difficult to automate, but
                this might change in the future with AI becoming more creative.
                However, once the content has been written, it is possible to
                automate proofreading. There are already several tools available
                that help you edit and refine your copy, so it is perhaps only a
                matter of time before it becomes fully automated.
              </h5>

              <h5 className="h3">
                <b>COMPENSATION & BENEFITS MANAGERS</b>
              </h5>
              <h5 className="h3">
                While human resource departments will be manned by humans, for
                the time being, it is possible to automate compensation and
                benefits services. This not only removes staff from what might
                be considered tedious work but also streamlines the method and
                makes it more efficient.
              </h5>

              <h5 className="h3">
                <b>TAXI DRIVERS</b>
              </h5>
              <h5 className="h3">
                Self-driving cars are no longer a science fiction dream, and
                with ‘smart’ cars already on our roads, we could soon be taking
                trips in vehicles that have no driver at all.
              </h5>

              <h5 className="h3">
                <b>CONSTRUCTION WORKERS</b>
              </h5>
              <h5 className="h3">
                Japan’s Institute of Advanced Industrial Science and Technology
                has already developed a prototype humanoid that would replace
                human laborers. This robot could lift loads beyond human
                capabilities and replace humans in dangerous situations
                involving heavy loads.
              </h5>

              <h5 className="h3">
                <b>FARMERS</b>
              </h5>
              <h5 className="h3">
                Farming robots are not a new concept to the industry. Several
                ‘smart’ machines automate certain agricultural processes, and we
                even have cow milking machines that allow cows to milk
                themselves. At this rate, it seems that farming will not require
                much human intervention at all.
              </h5>

              <h5 className="h3">
                <b>LAWYERS</b>
              </h5>
              <h5 className="h3">
                While lawyer shows on television make it seem like a glamorous
                profession, a lot of the work undertaken is tedious.With legal
                automation it is now possible to automate a great deal of their
                labor, like filing paperwork, creating wills and contracts,
                leaving them to concentrate on more complex cases.
              </h5>

              <h5 className="h3">
                <b>CHEFS & WAITER STAFF</b>
              </h5>
              <h5 className="h3">
                Moley Robotics has developed a ‘robochef’ that can cook
                thousands of recipes, do the dishes, and act as a refrigerator.
                This could make manual cooking redundant not only in restaurants
                but in homes too.
              </h5>

              <h5 className="h3">
                <b>CUSTOMER SERVICE WORKERS</b>
              </h5>
              <h5 className="h3">
                A lot of customer service has moved online, with social media
                playing a big role. However, with chatbots, customer service
                apps, and AI, it is possible to troubleshoot and build customer
                relationships without having a person involved at all.
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
