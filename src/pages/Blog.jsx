import React from "react";
/* eslint-disable */
import BlogBody from "../components/BlogBody";
import BlogBody2 from "../components/BlogBody";
import Blogbody22 from "../components/Blogbody22";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";

const Blog = () => {
  const { isOpen, OnClick } = useHooks();
  return (
    <>
      <MainHeader ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />
      {/* ABOUT US HEADER IMAGE START */}
      <div className="blogHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-white">
        <h1 className="mt-5 pt-5 display-4">BLOG</h1>
        <h4 className="row text-center mt-3 mb-4">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 m-auto headerPara">
            When It Comes To Website Development, We Push The Limits And Set New
            Standards By Creating Functionally Rich And Aesthetically Stunning
            Websites. Best-In-Class UX And Compelling
          </div>
        </h4>
      </div>
      {/* ABOUT US HEADER IMAGE END */}
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* IDEAS PORTION START */}
      <div className="container-fluid">
        <div className="text-center mt-5 px-2">
          <h1 className="themeText display-4">We Help Businesses</h1>
          <h4 className="row text-secondary">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 m-auto lightColor">
              When It Comes To Website Development, We Push The Limits And Set
              New Standards By Creating Functionally Rich And Aesthetically
              Stunning Websites. Best-In-Class UX And Compelling
            </div>
          </h4>
        </div>
      </div>
      {/* IDEAS PORTION END */}
      <br />
      <br />
      {/* <BlogBody2 /> */}
      <Blogbody22 />
      <br />
      <br />
      <br />
      <br />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Blog;
