import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { portfolioFunc } from "../../redux/actions";

const Imgsld = ({ portfolioFunc, portfolio }) => {
	useEffect(() => {
		portfolioFunc();
	}, [portfolioFunc]);

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
	};
	return (
		<div className="ourPortfolio_container">
			<div className="container-fluid">
				{/* <div>
					<h1 className="text-center">OUR PORTFOLIO</h1>
				</div> */}
				<div className="row mt-5">
					<div className="col-10 col-sm-8 col-md-6 mx-auto">
						<Slider {...settings}>
							{portfolio.map((prev, i) => {
								return (
									<div key={i}>
										<img
											className="mx-auto"
											style={{ width: "100%" }}
											src={prev}
											alt="img"
										/>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				{/* <div className="row">
					<h2 className="col-12 text-center">CLIENT: ABC</h2>
					<h5 className="col-12 col-sm-10 mx-auto text-center">
						I'm really happy with their determination to finish my project. I knew it wasn't easy, their helpful attitude makes it clear that you can continue to take on new challenges and grow with the company. Thankyou for your extra efforts.
					</h5>
				</div> */}
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		portfolio: state.Reducer.portfolio,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		portfolioFunc: function () {
			dispatch(portfolioFunc());
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Imgsld);
