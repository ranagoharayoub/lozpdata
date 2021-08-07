import React from "react";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
//import './Webdev.css';

import Imgsld from "../components/webdev/Imgsld";
import GetConnected from "../components/GetConnected";

import Image from "../assets/first2.png";

export default function Webdev() {
  const { isOpen, OnClick } = useHooks();
  return (
    <>
      <MainHeader ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      <div className="aboutUsHeader_container container-fluid d-flex flex-column justify-content-left align-items-left text-white">
        <br /> <br /> <br />
        <h1 className="pl-5 mt-5 pt-5 align-self-center">
          PROJECT MANAGEMENT & THE IT SECTOR
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
          PROJECT MANAGEMENT & THE IT SECTOR
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
                Project management is defined as a way of making use of skills,
                knowledge, techniques, and experience into accomplishing precise
                project objectives in line with the undertaking attractiveness
                criteria inside agreed parameters. Project management is
                required in almost every organization and it comes with pretty
                several benefits inclusive of prioritizing business resources
                and ensure their effective use. Here we will talk about Project
                Management in IT-based companies.
              </h5>
              <h5 className="h3">
                <b>WHAT IS AN IT PROJECT?</b>
              </h5>
              <h5 className="h3 text-secondary">
                IT (Information Technology) project is any venture that manages
                data frameworks, PCs, or IT foundation, for example, web
                advancement, programming execution, equipment establishment,
                data set administration, programming improvement, portable
                application improvement, network setup, and IT crisis
                recuperation.
              </h5>
              <h5 className="h3 text-secondary">
                Dealing with these ventures appropriately will guarantee the
                acknowledgment of the ideal outcomes while keeping up the worthy
                task rules and boundaries.
              </h5>
              <h5 className="h3">
                <b>WHAT IS IT PROJECT MANAGEMENT</b>
              </h5>
              <h5 className="h3 text-secondary">
                IT Project Management is the way toward applying information and
                ability to task the board on an IT project toward completing the
                reason for the venture. It can likewise be characterized as the
                way toward arranging, planning, execution, checking, and
                revealing of IT projects.
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
            <div>
              {/* <h1>
							<span className="themeText"> HEADING </span> 
						</h1> */}
              <h5 className="h3 ">
                There are six phases of an IT project which are based on the six
                phases of project management namely
              </h5>
              <h5 className="h3 text">
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
                  <li>
                    <b>Development: </b> the goal of this phase is to make the
                    whole plan as clear as possible to avoid risks in the next
                    phase. At this stage tasks are assigned, project management
                    tools are chosen, technicalities are outlined and raw
                    materials are made available.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Implementation: </b>this is the longest stage of an IT
                    project where the final deliverables are developed by the
                    project developers while the project manager monitors and
                    controls the work, resources, cost, quality, and risk.
                  </li>{" "}
                  <br />
                  <li>
                    <b>Closing: </b> this includes everything that comes up
                    after deliveries have been made to project stakeholders.
                  </li>
                </ul>
              </h5>
              <h5 className="h3 ">
                Since IT projects are often wider in scope compare to other
                projects, IT projects require more than just the typical project
                management tools and skills.There is a lot of IT Project
                Management Software available in the market specifically
                designed for managing IT projects.
              </h5>
              <h5 className="h3">
                <b>IT MANAGEMENT SOFTWARE</b>
              </h5>
              <h5 className="h3 ">
                IT project management software is used by project managers to
                organize and control the processes of their IT projects to
                increase efficiency. Some of the available software includes:
              </h5>
              <h5 className="h3">
                <ul>
                  <li>
                    <b>Microsoft Project</b>
                  </li>
                  <li>
                    <b>Com</b>
                  </li>
                  <li>
                    <b>Smartsheet</b>
                  </li>
                  <li>
                    <b>Workzone</b>
                  </li>
                  <li>
                    <b>Wrike</b>
                  </li>
                  <li>
                    <b>Asana</b>
                  </li>
                  <li>
                    <b>Jira</b>
                  </li>
                  <li>
                    <b>Liquid Planner</b>
                  </li>
                  <li>
                    <b>Trello</b>
                  </li>
                  <li>
                    <b>Basecamp</b>
                  </li>
                </ul>
              </h5>
              <h5 className="h3 ">
                When choosing IT project management software, it is advisable to
                bear in mind the following must-have features:
              </h5>
              <h5 className="h3">
                <ul>
                  <li>
                    <b>Gantt Chart</b>
                  </li>
                  <li>
                    <b>Reports</b>
                  </li>
                  <li>
                    <b>Dashboards</b>
                  </li>
                  <li>
                    <b>Workload Management</b>
                  </li>
                  <li>
                    <b>Timesheets</b>
                  </li>
                  <li>
                    <b>Alerts & notifications</b>
                  </li>
                </ul>
              </h5>
              <h5 className="h3 ">
                Project management is essential in IT because it ensures what is
                being delivered is right, is of quality and it brings leadership
                and direction to projects.
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
