import React from "react";
import portal1 from "../assets/portal1.svg";
import portal2 from "../assets/portal2.svg";
import portal3 from "../assets/portal3.svg";
import portal4 from "../assets/portal4.svg";
import portal5 from "../assets/portal5.svg";

const TravelPortal = () => {
	return (
		<div className="travelPortal_container">
			<div className="container-fluid">
				<div className="text-center mt-5 px-2">
					<h1 className="display-4 themeText">Travel Portal</h1>
					<h4 className="row text-secondary mt-4">
						<div className="col-12 col-sm-10 col-md-8 col-lg-7 m-auto">
							LozpData offers you web-based travel software that automates your sales, marketing, operations, and finances. We offer a powerful all-in-one solution for all your travel needs to be integrated on any site. Also, single click solution for travel agents willing to sell Flight, Hotel, and much more into their websites which is a cost-efficient program designed for all scale Travel Agents by offering revolutionary solutions.
						</div>
					</h4>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className="row">
					<div className="ESpace col-11 col-sm-10 col-md-8 order-2 order-md-1 mt-5 mt-md-0 mx-auto align-self-center">
						<h1 className="display-4 grid_sideLine pl-4">
							Accommodation management
						</h1>
						<h4 className="pl-4 mt-4 lightColor">
							A well-integrated system which consists of 500+ hotel accommodation information which will help customers to choose from. In the modern era, people prefer to do the process online, because all the data are displaying on a single platform.
						</h4>
					</div>
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-1 order-md-2 text-center">
						<img style={{ width: "70%" }} src={portal1} alt="portal" />
					</div>

					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-3 text-center mt-5">
						<img style={{ width: "70%" }} src={portal2} alt="portal" />
					</div>
					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-4 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Car Rental and hire
						</h1>
						<h4 className="pl-4 mt-4 lightColor">
							Our Bus & Car Booking System is linked with the APIs which helps in finding the best routes for the customers easily. These services show the particular city as per the search by the user. Your customers can choose the rental car at their convenience.
						</h4>
					</div>

					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-6 order-md-5 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Agency and Agent Details
						</h1>
						<h4 className="pl-4 mt-4 lightColor">
							We believe in reliability and trust. All information related to the agency and all agency members will be fetched for customers so they can take a thorough look at everything they need to know as well. We provide the complete dynamic package in the websites which are highly interactive and easy to use.
						</h4>
					</div>
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-5 order-md-6 text-center mt-5">
						<img style={{ width: "70%" }} src={portal3} alt="portal" />
					</div>

					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-7 text-center mt-5">
						<img style={{ width: "70%" }} src={portal4} alt="portal" />
					</div>
					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-8 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Booking Management System
						</h1>
						<h4 className="pl-4 mt-4 lightColor">
							Our Booking System is directly connected to the APIs in which the data is fetched directly, and the results are displayed in the form of an Invoice. After selecting the segment, it will redirect to the payment gateway for payment. And then the customer can generate the invoice.
						</h4>
					</div>

					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-10 order-md-9 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Mobile Applications
						</h1>
						<h4 className="pl-4 mt-4 lightColor">
							We can provide application-based systems as well for all your technological needs. We build applications on different platforms using high-end technologies and proven approaches. Our applications include Native, iOS, and React technologies.
						</h4>
					</div>
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-9 order-md-10 text-center mt-5">
						<img style={{ width: "50%" }} src={portal5} alt="portal" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TravelPortal;
