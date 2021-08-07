import React from "react";
import Image from "../assets/ourStory.png";
import { useHistory } from "react-router-dom";

const OurStory = () => {
	let history = useHistory();

	return (
		<div className="ourStory_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-7 align-self-center">
						<h1 className="lightColor">
							<span className="themeText"> OUR </span> STORIES
						</h1>
						<h5 className="h3 mt-4 text-secondary">
							LozpData helps companies become innovation leaders by delivering software teams on demand. Find the recent case studies below to find how we have helped various companies to do their best at their businesses. 
						</h5>
						<button
							onClick={() => history.push("/caseStudies")}
							style={{ borderRadius: "10px" }}
							className="themeBtn2 h3 py-4 mt-5"
						>
							VIEW CASE STUDY
						</button>
					</div>
					<div className="col-11 col-sm-5 mx-auto mt-5 mt-sm-0">
						<img style={{ width: "100%" }} src={Image} alt="our_story" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurStory;
