import React from "react";
import cDetails1 from "../assets/cDetails1.svg";
import cDetails2 from "../assets/cDetails2.svg";
import cDetails3 from "../assets/cDetails3.svg";

const ConstructionDetails = () => {
	return (
		<div className="travelPortal_container">
			<div className="container-fluid">
				<div className="row">
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto text-center">
						<img style={{ width: "38%" }} src={cDetails1} alt="portal" />
					</div>
					<div className="ESpace col-11 col-sm-10 col-md-8 mt-5 mt-md-0 mx-auto align-self-center">
						<h1 className="grid_sideLine pl-4 display-4 themeText">
							Optimise production, boost revenue
						</h1>
						<h4 className="pl-4 mt-4">
							We build construction company websites that convert your sales with SEO friendly interface. We understand the importance of proven experience, and we deliver powerful website designs for construction companies. Our teams build your site from concept into a feature-rich, online portal that attracts business and generates leads.
						</h4>
					</div>
					<div className="ESpace col-11 col-sm-10 col-md-8 mt-5 mt-md-0 order-4 order-md-3 mx-auto align-self-center">
						<h1 className="grid_sideLine pl-4 display-4 themeText">
							Use your data to plan production
						</h1>
						<h4 className="pl-4 mt-4">
							Your online presence has to span all platforms, and it has to communicate across all channels. Your construction projects are showcased in portfolio galleries, and your success is backed up by customer testimonials. From outlining job capabilities to offering online quotes, we make sure your website delivers a client experience that generates leads and increases business.
						</h4>
					</div>
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-3 order-md-4 text-center mt-5">
						<img style={{ width: "38%" }} src={cDetails2} alt="portal" />
					</div>

					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-5 text-center mt-5">
						<img style={{ width: "38%" }} src={cDetails3} alt="portal" />
					</div>
					<div className="ESpace col-11 col-sm-10 col-md-8 mt-5 mt-md-0 order-6 align-self-center mt-5">
						<h1 className="grid_sideLine pl-4 display-4 themeText">
							Balance your supply and save revenue
						</h1>
						<h4 className="pl-4 mt-4">
							Through our expertise in construction company web design, and by standing by our SEO code of ethics, LozpData can help boost your website’s rank, and also increase traffic to your website and improve conversion rates.
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConstructionDetails;
