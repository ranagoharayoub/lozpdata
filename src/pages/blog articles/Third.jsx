import React from "react";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import { useHooks } from "../../Hooks/useHooks";
//import './Webdev.css';
import Imgsld from "../../components/webdev/Imgsld";
import GetConnected from "../../components/GetConnected";

import Image from "../../assets/third2.png";

export default function Third() {
  const { isOpen, OnClick } = useHooks();
  return (
    <>
      <MainHeader ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      <div className="aboutUsHeader_container container-fluid d-flex flex-column justify-content-left align-items-left text-white">
        <br /> <br /> <br />
        <h1 className="pl-5 mt-5 pt-5 align-self-center">
          THE IMPACT OF DIGITAL TRANSFORMATION ON THE CONSTRUCTION INDUSTRY
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
          THE IMPACT OF DIGITAL TRANSFORMATION ON THE CONSTRUCTION INDUSTRY
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
                Like the education sector, construction companies are also left
                behind than the majority of their peers when it comes to digital
                transformation. This is an industry that accounts for around 7%
                of the world’s working population, but in the last 20 years
                boasts only a 1% average yearly increase in labor productivity.
                The global average is 2.8%. Indeed, digitalization of the
                construction industry could lead businesses to productivity
                gains of 14-15% and cost reduction of 4-6% yearly.
              </h5>
              <h5 className="h3 text-secondary">
                Before we can investigate the potential arrangements, we need to
                comprehend the issues. Exactly why have the construction
                business and digital transformation is such uncomfortable
                associates up until this point?
              </h5>
              <h5 className="h3 text-secondary">
                The response to that question lies in the divided idea of the
                actual business.
              </h5>
              <h5 className="h3 text-secondary">
                Construction projects are comprised of many moving parts, from
                various organizations – the vast majority of whom cooperate for
                a solitary bespoke project, at that point head out in a
                different direction.
              </h5>
              <h5 className="h3 text-secondary">
                Expenses are a substantial thought here. Regardless of whether
                the various organizations associated with a development project
                could agree on a particular specialized arrangement, and figure
                out how to share the expenses behind it, it's disputable the
                number of how many would contribute when it probably won't
                profit them on the following task as well – or the one after it.
              </h5>
              <h5 className="h3 text-secondary">
                The all-encompassing response to this problem is for the
                individual organizations required to modernize their endeavors
                in manners that help them cooperate with different organizations
                all the more successfully.
              </h5>
              <h5 className="h3 text-secondary">
                We suggest five key approaches to help make this happen:
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
                <b>CREATE COMPELLING BUSINESS</b>
              </h5>
              <h5 className="h3">
                You have to first make a business case that clearly defines the
                logistical problem, alongside the tangible benefits of solving
                it.
              </h5>
              <h5 className="h3">
                For instance, the idea above began with the notion that workers
                sharing feedback and challenges would be a good thing. Why?
              </h5>
              <h5 className="h3">
                Let’s say you make the case that your construction business
                spends hundreds of extra man-hours correcting manufacturing
                faults, with no way to capture issues ahead of time to fix them
                before work begins. Suddenly, having a way to capture those
                faults early on could be an enormous cost-saver, with
                substantial financial benefits to all future projects.
              </h5>

              <h5 className="h3">
                {" "}
                <b> UPSKILL THE WORKERS:</b>{" "}
              </h5>
              <h5 className="h3">
                Once you’ve done the thinking and built a business case for the
                positive impact of digital transformation on construction, it
                then makes sense to enable your teams to use the new technology
                effectively.
              </h5>
              <h5 className="h3">
                {" "}
                In the case of the app mentioned above, incepting training and
                processes should be relatively straightforward. The human and
                technological challenges only grow, however, when you start to
                think bigger.{" "}
              </h5>
              <h5 className="h3">
                One good example is the wide proliferation of computer design
                tools. This is an especially relevant concern for site managers
                and office staff, who in a post-pandemic world could find
                themselves working at home one day, on-site the next, and in a
                corporate office the week after.
              </h5>

              <h5 className="h3">
                <b>FACTOR NEW DIGITAL TOOLS</b>
              </h5>
              <h5 className="h3">
                One of the reasons the digitalization of the construction
                industry hasn’t proved as profitable as it might is that when
                construction companies do invest in new digital tools, they
                often don’t plan effectively around them.
              </h5>
              <h5 className="h3">
                Used well, digital tools can help site managers lower
                unnecessary resource use, manage their site staff’s time more
                efficiently, and generally speed up workflows.{" "}
              </h5>
              <h5 className="h3">
                The same digital tools designed to help different companies
                collaborate on projects can also help their managers work
                together to pilot new technology on a smaller scale, monitor the
                results, and learn from each other’s areas of expertise.
              </h5>
              <h5 className="h3">
                The same digital tools designed to help different companies
                collaborate on projects can also help their managers work
                together to pilot new technology on a smaller scale, monitor the
                results, and learn from each other’s areas of expertise.
              </h5>

              <h5 className="h3">
                <b>TRANSFORM DIGITALLY AT COMPANY LEVEL</b>
              </h5>
              <h5 className="h3">
                Construction buyers might use digital tools powered by machine
                learning to take an in-depth inventory of their current stock.
                This would allow them to better understand variances between
                similar items from different suppliers, and make the right
                purchasing decisions for specific designs on every project
                they’re working on.
              </h5>
              <h5 className="h3">
                The knock-on effect is that having the right materials, to a
                uniform standard, would mean workers on each project need to
                spend less time adapting and modifying materials to suit the
                project’s specifications.
              </h5>
              <h5 className="h3">
                It might be amongst the slowest industries to adapt to modern
                technology, but as we mentioned at the outset, the impact of
                digital transformation on construction could be enormous.
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
