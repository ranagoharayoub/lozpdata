import React from "react";
import travelAgencyC from "../assets/travelAgencyC.png";
import travelAgencyC1 from "../assets/travelAgencyC1.png";
import Slider from "react-slick";

const TravelCrousel = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
	};
	const data = [travelAgencyC, travelAgencyC1];
	return (
		<div style={{ background: "#2365B1" }} className="container-fluid">
			<div className="travelCrousel">
				<div className="row">
					<div className="col-12">
						<Slider {...settings}>
							{data.map((prev, i) => {
								return (
									<div key={i} className="travelCBody">
										<div className="d-flex flex-column flex-md-row justify-content-sm-between align-items-center">
											<div>
												<img
													style={{ width: "100%" }}
													src={prev}
													alt="travel"
												/>
											</div>
											<div className="col-6 text-center text-white">
												<h1 className="mb-4 display-4">Travel Agency</h1>
												<h5>
													A well-integrated and powerful travel portal with an all-in-one solution to sell Flight, Hotel,
														and much more which is a 
													cost-efficient program is build for all-scale travel agents by offering revolutionary solutions.
												</h5>
											</div>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TravelCrousel;
