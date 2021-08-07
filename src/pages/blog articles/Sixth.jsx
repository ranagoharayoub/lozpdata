import React from "react";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import { useHooks } from "../../Hooks/useHooks";
//import './Webdev.css';
import Imgsld from "../../components/webdev/Imgsld";
import GetConnected from "../../components/GetConnected";

import Image from "../../assets/sixth2.png";

export default function Sixth() {
  const { isOpen, OnClick } = useHooks();
  return (
    <>
      <MainHeader ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      <div className="aboutUsHeader_container container-fluid d-flex flex-column justify-content-left align-items-left text-white">
        <br /> <br /> <br />
        <h1 className="pl-5 mt-5 pt-5 align-self-center">
          SECRET OF SUCCESSFUL REMOTE IT TEAMS
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
          SECRET OF SUCCESSFUL REMOTE IT TEAMS
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
                Work from home had been on the rise and has been proven to have
                some great and effective benefits, including lowered stress and
                great productivity. Even so, the secret to successfully managing
                a remote IT team isn’t just to start working from home. There is
                a lot of work that goes into producing effective results. Here
                are some features that all successful IT teams working from home
                share.
              </h5>
              <h5 className="h3">
                <b>GOOD LEADERSHIP</b>
              </h5>
              <h5 className="h3 text-secondary">
                Any successful team needs strong leaders, but this is especially
                true for working from home teams. To achieve results, leaders
                need to understand the common objective, the potential conflicts
                in the route to achieving it, and the role of each team member
                in achieving it.
              </h5>
              <h5 className="h3 text-secondary">
                The secret to managing remote IT teams lies in good team leaders
                who also identify how important it is to have personal
                connections within the team for members to work continously as a
                unit. As a result, they ensure that the team is allowed
                interaction that isn’t always work-related.
              </h5>
              <h5 className="h3 text-secondary">
                Good leadership can be the single most important secret of a
                successful remote IT team.
              </h5>

              <h5 className="h3">
                <b>INVITING FEEDBACK</b>
              </h5>

              <h5 className="h3 text-secondary">
                Any team requires collaboration to be effective. This requires
                each member to share ideas and opinions, not just the team
                leader. However, during remote meetings, it is very easy for the
                quieter members of the team to get missed.
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
                Therefore, it is up to the team leader to ensure that everyone
                gets a voice. Successful remote IT teams use video conferencing
                for meetings to allows everyone to communicate effectively. It
                is especially useful for observing the facial expressions and
                body language of team members, which can be important
                communication tools.
              </h5>
              <h5 className="h3">
                Feedback isn’t only important during meetings either. If you
                don’t hear from a colleague, it’s easy to assume they are fine.
                However, some people find it difficult to communicate when
                they’re struggling and will often not say anything. In such
                cases, it is up to the team leader to encourage them to speak up
                by asking open-ended questions.
              </h5>

              <h3 className="h3">
                <b>KNOW YOUR TEAM</b>
              </h3>
              <h5 className="h3">
                Another reason why a successful working from home IT team relies
                on good leadership is that these leaders invest time in getting
                to know their team. As a result, they understand the personality
                of everyone. This is necessary because different people have
                different working skills and needs.
              </h5>
              <h5 className="h3">
                Some may need a little direction and will go off and do what
                they need to do and may not appreciate being remotely managed.
                Others might find the flexibility uncomfortable and need more
                guidance. Some enjoy not having to stick to working hours while
                others need the 9-to-5 structure to be productive.
              </h5>
              <h5 className="h3">
                The team leader needs to take the different working styles into
                account to manage them all effectively.
              </h5>

              <h3 className="h3">
                <b>VIDEO CONFERENCES</b>
              </h3>
              <h5 className="h3">
                Video conferences can help improve communication within the
                team. Therefore, successful remote IT teams will use video calls
                instead of text to communicate with each other.
              </h5>
              <h5 className="h3">
                Being able to celebrate achievements together is also a great
                way of building team spirit.
              </h5>
              <h5 className="h3">
                Video conferencing also serves another effective function for
                remote teams. Seeing other people can help get rid of the sense
                of isolation when working from home.
              </h5>

              <h3 className="h3">
                <b>SMALLER TEAM SIZE</b>
              </h3>
              <h5 className="h3">
                Another secret of a successful remote IT team is the fact that
                they are usually limited to ten people or fewer. While it might
                seem that larger teams would get more done, the fact is that
                small teams are much better and can work better.
              </h5>
              <h5 className="h3">
                The reason for this is, with different working styles and
                preferences, it is much more difficult to coordinate a larger
                group, while a small group can adapt to an agile way of working
                quite easily.
              </h5>

              <h3 className="h3">
                <b>MULTIPLE COMMUNICATING PLATFORM</b>
              </h3>
              <h5 className="h3">
                It’s quite convincing that communication is one of the major
                secrets for success in remote IT teams. If the group
                communicates well, it becomes apparent in the results they
                deliver. This is why successful remotely working IT teams don’t
                rely on just one channel to communicate.
              </h5>
              <h5 className="h3">
                There are several tools and platforms for remote working and
                communication, and each one of them offers a different set of
                advantages. Slack is excellent for text communication and
                collaboration, while Skype can be used for text as well as voice
                communication. Zoom is designed for video conferencing,
                Microsoft Teams is an all-in-one tool that combines video
                conferencing, document sharing, and collaboration, and Trello
                allows teams to manage tasks and organize projects.
              </h5>

              <h3 className="h3">
                <b>CONCLUSION</b>
              </h3>
              <h5 className="h3">
                As with any other team, a successful remote IT team needs
                members that can work comfortably with each other. This means
                they need to communicate effectively and manage their strengths
                and weaknesses to give great results.
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
