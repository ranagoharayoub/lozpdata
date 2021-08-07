import React from "react";
//import Image from "../assets/ourStory.png";
import Image from "../../assets/ourStory.png"

const OurStory = () => {
	return (
		<div className="ourStory_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-7 align-self-center">
						<h1>
							<span className="themeText"> OUR </span> STORIES
						</h1>
						<h5 className="h3 text-secondary">
						Project management is defined as a way of making use of skills, knowledge, techniques, and experience into accomplishing precise project objectives in line with the undertaking attractiveness criteria inside agreed parameters. 
						Project management is required in almost every organization and it comes with pretty several benefits
						inclusive of prioritizing business resources and ensure their effective use. 
						Here we will talk about Project Management in IT-based companies.
						</h5>

						<h5 className="h3">	
							<b>WHAT IS AN IT PROJECT?</b>	 
						</h5>
						<h5 className="h3 text-secondary">
						Project management is defined as a way of making use of skills, knowledge, techniques, and experience into accomplishing precise project objectives in line with the undertaking attractiveness criteria inside agreed parameters. 
						Project management is required in almost every organization and it comes with pretty several benefits
						inclusive of prioritizing business resources and ensure their effective use. 
						Here we will talk about Project Management in IT-based companies.
						</h5>
						<h5 className="h3 text-secondary">
						Project management is defined as a way of making use of skills, knowledge, techniques, and experience into accomplishing precise project objectives in line with the undertaking attractiveness criteria inside agreed parameters. 
						Project management is required in almost every organization and it comes with pretty several benefits
						inclusive of prioritizing business resources and ensure their effective use. 
						Here we will talk about Project Management in IT-based companies.
						</h5>
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
