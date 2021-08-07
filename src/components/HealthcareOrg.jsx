import React from "react";
import healthcare1 from "../assets/healthcare1.svg";
import healthcare2 from "../assets/healthcare2.svg";
import healthcare3 from "../assets/healthcare3.svg";
import healthcare4 from "../assets/healthcare4.svg";
import healthcare5 from "../assets/healthcare5.svg";

const HealthcareOrg = () => {
	return (
		<div className="travelPortal_container">
			<div className="container-fluid">
				<div className="row">
					<div className="ESpace col-11 col-sm-10 col-md-8 order-2 order-md-1 mt-5 mt-md-0 mx-auto align-self-center">
						<h1 className="display-4 grid_sideLine pl-4">
							Healthcare Organisations
						</h1>
						<h4 className="pl-4 mt-4">
							Medical software is crucial to the healthcare industry since it lets healthcare providers monitor and manage healthcare organizations and patient data. We are here to build that kind of software for you.
						</h4>
					</div>
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-1 order-md-2 text-center">
						<img style={{ width: "45%" }} src={healthcare1} alt="portal" />
					</div>

					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-3 text-center mt-5">
						<img style={{ width: "45%" }} src={healthcare2} alt="portal" />
					</div>
					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-4 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Public & Private Hospitals
						</h1>
						<h4 className="pl-4 mt-4">
							All hospitals need to have easier access to healthcare data because processing data online optimizes operations within a practice, allowing employees to search within electronic documents.
						</h4>
					</div>

					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-6 order-md-5 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Clinics & Laboratories
						</h1>
						<h4 className="pl-4 mt-4">
							Clinics and laboratories must have access to their patients data anywhere and anytime as well. Due to these automated features, medical providers can work more effectively. This also improves patient satisfaction.
						</h4>
					</div>
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-5 order-md-6 text-center mt-5">
						<img style={{ width: "45%" }} src={healthcare3} alt="portal" />
					</div>

					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-7 text-center mt-5">
						<img style={{ width: "45%" }} src={healthcare4} alt="portal" />
					</div>
					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-8 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Assisted Living Facilities
						</h1>
						<h4 className="pl-4 mt-4">
							With a large amount of data, a human can err, but a system can’t. Staff can easily take care of all living facilities available at the hospitals by just checking the data. They don’t have to rush to each room to check availability all the time thus saving time and energy.
						</h4>
					</div>

					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-10 order-md-9 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Personal Healthcare
						</h1>
						<h4 className="pl-4 mt-4">
							Manage your health organization by simply investing in the management system which will that contains detailed information about patient’s demographics, medical history, laboratory results, and allergies, which will also help all doctors and physicians to take good care of them.
						</h4>
					</div>
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-9 order-md-10 text-center mt-5">
						<img style={{ width: "50%" }} src={healthcare5} alt="portal" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HealthcareOrg;
