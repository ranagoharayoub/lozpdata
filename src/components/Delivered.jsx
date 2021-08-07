import React from "react";
import build1 from "../assets/build1.svg";
import singleMob from "../assets/singleMobile.svg";

const Delivered = () => {
	return (
		<div className="delivered_container">
			<div className="container-fluid">
				<div className="row">
					<h1 className="col-12 text-center display-4">WHAT WE DEILIVERED</h1>
					<h4 className="col-12 col-sm-11 col-md-9 mx-auto mt-3 mb-5 text-center">
						We know that if the client’s project launches smoothly, they’ll come back for more. We're willing to over-invest in guaranteeing results, rather than under-invest to make our financial reports look pretty in the short-run.
					</h4>
				</div>
				<div className="col-12 col-sm-10 mx-auto">
					<div className="row my-5">
						<div className="col-9 col-sm-7 col-md-4 mx-auto mb-5 mb-md-0">
							<img style={{ width: "100%" }} src={build1} alt="build" />
						</div>
						<div className="col-12 col-sm-8 col-md-6 mb-5 mx-auto mb-md-0 align-self-center text-left py-3 pl-5">
							<h1 className="themeText display-4">Create PO</h1>
							<h4 className="text-secondary">
								We Created purchase orders and track material costs by labor activity and even detailed progress on different phases of the project. Compare estimated costs to actuals produced in POs for material cost and productivity tracking.
							</h4>
						</div>
						<div className="col-12 col-sm-8 col-md-6 mb-5 mx-auto mb-md-0 order-4 order-md-3 align-self-center text-left py-3 pl-5">
							<h1 className="themeText display-4">Home</h1>
							<h4 className="text-secondary">
								Hire the best developers and designers around. Start a project with us now and see for yourself.
							</h4>
						</div>
						<div className="col-8 col-sm-6 col-md-3 order-3 order-md-4 mx-auto mb-5 mb-md-0">
							<img style={{ width: "100%" }} src={singleMob} alt="build" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Delivered;
