import React from "react";
import { useHistory } from "react-router-dom";

const WebDevelopmentSection = ({ heading, image }) => {
	let history = useHistory();

	return (
		<div className="webDevelopmentS_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-9 col-md-8 order-2 order-md-1 mb-5 mb-md-0 mt-5 mt-md-0 mx-auto align-self-center text-left py-3 pl-5 my-5">
						<h1 className="font-weight-bold display-4">
							{(heading === "DESIGN AND BRANDING" && "DESIGN AND BRANDING") || (
								<>
									<span className="themeText"> {heading} </span> DEVELOPMENT
								</>
							)}
						</h1>
						<h4
							className={`${
								heading === "DESIGN AND BRANDING" && "grid_sideLine pl-4 mt-3"
							}`}
						>
							LozpData product and development design services help you define your product vision and roadmap. Our customer-centric approach ensures your product is shaped to fit real customers needs. We combine technology expertise with design thiinking, helping yu craft user experiences that drive engagement.
						</h4>
						<button
							onClick={() => history.push("/start_A_Project")}
							className="themeBtn mt-5"
						>
							LETS TALK
						</button>
					</div>
					<div className="col-12 col-sm-10 col-md-4 mx-auto order-1 order-md-2">
						<img style={{ width: "100%" }} src={image} alt="build" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WebDevelopmentSection;
