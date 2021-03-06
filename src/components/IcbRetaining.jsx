import React from "react";
import clock from "../assets/clock.svg";
import mobile from "../assets/mobile.svg";
import team from "../assets/team.svg";
import travelImg from "../assets/travel.svg";
import icbImg from "../assets/icbSolo.png";
import travelAgency from "../assets/travelAgnecy.png";
import ecommerce2 from "../assets/ecommerce2.png";

const IcbRetaining = ({ icb, ecommerce, travel }) => {
	return (
		<>
			{icb && (
				<div className="icbRetaining_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-6 col-sm-4 col-md-3 mx-auto">
								<img
									style={{ width: "100%" }}
									className=""
									src={icbImg}
									alt="icb"
								/>
							</div>
							<div className="col-11 col-sm-6 col-md-6 offset-3 mt-5 mt-sm-0 mx-auto align-self-center">
								<h1 className="themeText"> Construction Invoice & PO management system </h1>
								<h4>
									We developed Purchase order and Invoice management system for a construction Company.
									Our Main Target was to set transparcnecy in purchasing and invoiceing system, Using this system Company can save Million Dollars Monthly. We Build a Mobile app for 
										PO creation and a website for invoicing and PO validation.
								</h4>
								<div className="row">
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Time</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "12%" }}
												src={clock}
												alt="clock"
												className="mr-2"
											/>
											<h5 className="text-secondary">March 2020- Present</h5>
										</div>
									</div>
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Platform</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "9%" }}
												src={mobile}
												alt="mobile"
												className="mr-2"
											/>
											<h5 className="text-secondary">Web</h5>
										</div>
									</div>
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Team</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "12%" }}
												src={team}
												alt="mobile"
												className="mr-2"
											/>
											<h5 className="text-secondary">3 - 4 Members</h5>
										</div>
									</div>
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Industry</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "12%" }}
												src={travelImg}
												alt="mobile"
												className="mr-2"
											/>
											<h5 className="text-secondary">Travel Agency</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{travel && (
				<div className="icbRetaining_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 col-sm-8 col-md-6 mx-auto">
								<img style={{ width: "100%" }} src={travelAgency} alt="icb" />
							</div>
							<div className="col-11 col-sm-10 col-md-5 offset-2 mt-5 mt-sm-0 mx-auto align-self-center">
								<h1 className="themeText display-4"> Travel agency website </h1>
								<h4 className="lightColor">
									A well-integrated and powerful travel portal with an all-in-one solution to sell Flight, Hotel, and much more which is a cost-efficient program is build for all-scale travel agents by offering revolutionary solutions.
								</h4>
								<div className="row">
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Time</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "12%" }}
												src={clock}
												alt="clock"
												className="mr-2"
											/>
											<h5 className="text-secondary">March 2020- Present</h5>
										</div>
									</div>
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Platform</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "9%" }}
												src={mobile}
												alt="mobile"
												className="mr-2"
											/>
											<h5 className="text-secondary">Web</h5>
										</div>
									</div>
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Team</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "12%" }}
												src={team}
												alt="mobile"
												className="mr-2"
											/>
											<h5 className="text-secondary">3 - 4 Members</h5>
										</div>
									</div>
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Industry</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "12%" }}
												src={travelImg}
												alt="mobile"
												className="mr-2"
											/>
											<h5 className="text-secondary">Travel Agency</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{ecommerce && (
				<div className="icbRetaining_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 col-sm-8 col-md-6 mx-auto align-self-center">
								<img style={{ width: "100%" }} src={ecommerce2} alt="icb" />
							</div>
							<div className="col-11 col-sm-10 col-md-5 offset-2 mt-5 mt-sm-0 mx-auto align-self-center">
								<h1 className="themeText display-4"> Travel agency website </h1>
								<h4 className="mt-3">
									A well-integrated and powerful travel portal with an all-in-one solution to sell Flight, Hotel, and much more which is a cost-efficient program is build for all-scale travel agents by offering revolutionary solutions.
								</h4>
								<div className="row">
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Time</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "12%" }}
												src={clock}
												alt="clock"
												className="mr-2"
											/>
											<h5 className="text-secondary">March 2020- Present</h5>
										</div>
									</div>
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Platform</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "9%" }}
												src={mobile}
												alt="mobile"
												className="mr-2"
											/>
											<h5 className="text-secondary">Web</h5>
										</div>
									</div>
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Team</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "12%" }}
												src={team}
												alt="mobile"
												className="mr-2"
											/>
											<h5 className="text-secondary">3 - 4 Members</h5>
										</div>
									</div>
									<div className="col-10 col-sm-6 mx-auto mt-5">
										<h3>Industry</h3>
										<div className="d-flex align-items-center">
											<img
												style={{ width: "12%" }}
												src={travelImg}
												alt="mobile"
												className="mr-2"
											/>
											<h5 className="text-secondary">Travel Agency</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default IcbRetaining;
