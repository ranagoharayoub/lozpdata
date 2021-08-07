import React from "react";
//import Image from "../assets/ourStory.png";
import Image from "../../assets/ourStory.png"

const OurStory = () => {
	return (
		<div className="ourStory_container">
			<div className="container-fluid">
				<div className="row">
					<div >
						<h1>
							<span className="themeText"> HEADING </span> 
						</h1>
						<h5 className="h3 text-secondary">
                        Our belief in creating tangible value for our customers is what we think is different about LozpData. Our attention to detail and quality is unmatched in the industry.
						</h5>
                        <h5 className="h3 text-secondary">
                        LozpData helps companies become innovation leaders by delivering software teams on demand. Find the recent case studies below to find how we have helped various companies to do their best at their businesses. 
						</h5>
                        <h5 className="h3 text-secondary">
                       Our teams help you decide the right architecture and processes to follow and oversee the successful delivery of your software projects.
						</h5>
					</div>
					{/* <div className="col-11 col-sm-5 mx-auto mt-5 mt-sm-0">
						<img style={{ width: "100%" }} src={Image} alt="our_story" />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default OurStory;
