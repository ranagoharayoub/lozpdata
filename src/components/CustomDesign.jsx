import React from "react";

const CustomDesign = ({ img }) => {
	return (
		<div className="customDesign_container">
			<div className="container-fluid">
				<h1 className="text-center themeText mb-5 display-4">
					A SECURE CUSTOM DESIGN
				</h1>
				<div className="row">
					<div className="col-12 col-md-10 mx-auto">
						<div className="row">
							<div className="col-10 col-sm-6 mx-auto order-2 order-sm-1 mt-5 mt-sm-0 align-self-center">
								<h1 className="themeText display-4">About the Product</h1>
								<h4 className="lightColor mt-4">
									We solve your unique business challenges by building custom applications.
		                                                         We add development capacity to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. 
		                                                          Projects are driven by designers and they make sure design and experiences translate to code.
								</h4>
							</div>
							<div className="col-10 col-sm-6 mx-auto order-1 order-sm-2">
								<img style={{ width: "100%" }} src={img} alt="travelAgency" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomDesign;
