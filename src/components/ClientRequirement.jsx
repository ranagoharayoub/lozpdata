import React from "react";
import diamond from "../assets/diamond.svg";

const ClientRequirement = () => {
	const clientReq = [
		"Conference Planning and Collaboration",
		"Navigation",
		"Message Feature",
		"Conference Planning and Collaboration",
		"Conference Planning and Collaboration",
		"Conference Planning and Collaboration",
	];
	return (
		<div className="clientRequirement_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center display-4">CLIENT REQUIREMENTS</h1>
					</div>
					<h3 className="col-12 col-sm-10 col-md-8 mx-auto mt-3 mb-2 text-center">
						
Client main Target was to achieve transparency in his company.He was losing his money because of untrasparecny upto $5M a year.
					</h3>
				</div>
				<div className="row mt-3">
					{clientReq.map((prev, i) => {
						return (
							<div
								key={i}
								className="col-12 col-sm-6 col-md-4 mt-5 text-center"
							>
								<img style={{ width: "20%" }} src={diamond} alt="diamond" />
								<h4 className="col-12 col-sm-10 mx-auto mt-4">{prev}</h4>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ClientRequirement;
