import React from "react";
import branding from "../assets/branding.svg";
import branding2 from "../assets/brandingRes.svg";
import { GoPrimitiveDot } from "react-icons/go";

const Branding = () => {
	return (
		<div className="branding_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-7 col-lg-8">
						<h1 className="themeText font-weight-bold display-4">Branding</h1>
						<h4 className="col-11 col-md-8 px-md-0">
							Branding is a way of identifying your business. Want to start a new business? We are here to help you with all your business needs. Tell us about your idea and we will brand your business according to your choice. A strong brand will help customers to remember your business.
		</h4>
						<br />
						<div className="col-10 col-sm-8 mx-auto d-block d-md-none">
							<img style={{ width: "100%" }} src={branding2} alt="branding" />
						</div>
						<br />
						<h1 className="themeText mt-2 display-4">
							Considering launching a new product?
						</h1>
						<h4>
							Branding should be considered in the early stages of launching a new product. Creating a strong brand involves in-depth market research to work out why customers should be attracted to your business. And we aare here to give it all for your every launch.
						</h4>
						<h1 className="themeText mt-5 display-4">
							Is your current brand not engaging your audience the way you'd
							like?
						</h1>
						<h4>
							Rebranding can shape a new identity among users and attract new
							market share.
						</h4>
						<div className="w-75 mx-0 mx-md-auto mt-4">
							<h3>
								<GoPrimitiveDot color="#2365b1" /> visual identity
							</h3>
							<h3>
								<GoPrimitiveDot color="#2365b1" /> brand strategy
							</h3>
							<h3>
								<GoPrimitiveDot color="#2365b1" /> logo design
							</h3>
						</div>
					</div>
					<div className="d-none d-md-block col-md-5 col-lg-4 align-self-center">
						<img style={{ width: "100%" }} src={branding} alt="branding" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Branding;
