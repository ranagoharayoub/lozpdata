import React from "react";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import { useHooks } from "../../Hooks/useHooks";
//import './Webdev.css';
import Imgsld from "../../components/webdev/Imgsld";
import GetConnected from "../../components/GetConnected";

import Image from "../../assets/second2.png";

export default function Second() {
  const { isOpen, OnClick } = useHooks();
  return (
    <>
      <MainHeader ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      <div className="aboutUsHeader_container container-fluid d-flex flex-column justify-content-left align-items-left text-white">
        <br /> <br /> <br />
        <h1 className="pl-5 mt-5 pt-5 align-self-center">
          10 TOOLS FOR MONITORING REMOTE IT EMPLOYEES
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
          10 TOOLS FOR MONITORING REMOTE IT EMPLOYEES
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
                The remote workforce is continuously turning to the new normal
                since the beginning of the COVID 19 pandemic. As a result of
                this, monitoring remote workers especially in the IT sector is
                very important.
              </h5>
              <h5 className="h3 text-secondary">
                Monitoring employees can automatically affect the productivity
                of employees. When employees know that their performance and
                behavior are being checked and tracked, they tend to be more
                focused and less distracted in their work, which improves the
                overall profitability of the business.
              </h5>
              <h5 className="h3 text-secondary">
                There are different software and tools that can be deployed into
                achieving this.
              </h5>
              <h5 className="h3">
                <b>TOOLS FOR MONITORING REMOTE EMPLOYEES</b>
              </h5>
              <h5 className="h3 text-secondary">
                Employee monitoring software allows company administrators to
                monitor and supervise all their employee computers from one
                location.
              </h5>
              <h5 className="h3 text-secondary">
                For remote workers, there are specific tools that can be used in
                monitoring employee’s activities.
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
              <h5 className="h3 text">
                <ul>
                  <li>
                    <b>Time Doctor:</b> is a monitoring tool that takes stock of
                    how many hours each employee is working per day and the
                    total hours worked during a month or week. All an employee
                    has to do is start the timer before they start a task and
                    then stop it at the end of the task. TimeDoctor runs in the
                    background while calculating the time spent and sites
                    accessed during this time.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Remote Desk: </b>measures the time and daily productivity
                    of remote staff. The application distinguishes between idle
                    and active time spent during a monitoring session to
                    determine billable and non-billable hours. The software has
                    features such as detecting the use of prohibited items;
                    secures the identities of remote agents; intermittent
                    desktop screenshots; record an agent’s productive and
                    unproductive hours and helps scan and detect unauthorized
                    apps like spyware, malware, and viruses.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Workpuls: </b>analyze all apps and websites your team is
                    using, categories them into productive or unproductive, and
                    delivers productivity charts and reports of their working
                    time. Also, tracks when employees are clocking in and out,
                    when they take breaks, and how much time they spent working
                    during their clocked time.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Desktime: </b>gives the freedom to take screenshots,
                    track URLs, app & document as well as manage projects and
                    even offline time of employees. Also, gives the employee the
                    option to do personal tasks without being tracked or
                    recorded in private mode.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Cloud Desk: </b>this software takes random screenshots of
                    the employee's laptop screen, sends periodic pop-ups to
                    confirm their presence at work, and verifies their
                    engagement with work, periodically, by taking random face
                    verification ID.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Timely: </b>this is a remote employee monitoring software
                    that uniquely categorizes time based on tasks, websites
                    accessed, and tools used. It can catch billable action
                    through definite timesheets and reports. It can follow
                    non-billable exercises also.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Everhour: </b>this software is web-based. Allows you to
                    take stock of what your team is doing at the moment,
                    supports advanced billing functions such as invoice
                    generation in multiple currencies, has functional browser
                    extensions for easy accessibility, and allows editing if
                    mistakes are made on-time records. Managers can lock the
                    time editing feature for some time.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Email Analytics: </b>this shows email activity in Gmail
                    so you can see emails sent and received by day or hour of
                    the day, and calculates critical KPIs for sales and customer
                    service teams such as average email response time.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Hubstaff: </b>this tool allows you to see your employee’s
                    work in progress with optional screenshots, track app and
                    URL activity, capture activity levels based on keyboard and
                    mouse usage, easily export timesheets and reports and it
                    runs on Windows, Mac, Linux, and Chromebook.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Emp Monitor: </b>has features including, idle time
                    monitoring, keystroke recording, track apps and URLs,
                    productivity analysis, screen activity recording as well as
                    time tracking.
                  </li>
                </ul>
              </h5>

              <h5 className="h3 ">
                Keeping track of your remote employees doesn’t have to be
                difficult if you choose the right tool that suits your business.
                With the right employee monitoring tool, you can easily keep
                track of what your employees are doing to improve your workforce
                productivity.
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
