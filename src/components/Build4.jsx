import React, { useEffect } from "react";
import { connect } from "react-redux";
import { build4Func } from "../redux/actions";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

const Build4 = ({ build4, build4Func }) => {
	useEffect(() => {
		build4Func();
	}, [build4Func]);
	let history = useHistory();

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
	};
	return (
		<div className="build2_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-5 order-2 order-md-1 text-center text-md-left mt-5 mt-md-0 align-self-center">
						<h1 className=" mt-5 mt-md-0">
							<span className="themeText display-4">WE Can</span> Build
						</h1>
						<h3 className="mt-3 mx-auto">
							Our attention to detail and quality is unmatched in the industry. We take care of your development needs. Get access to an entire team of experts, ready whenever you need us.
						</h3>
						<button
							onClick={() => history.push("/start_A_Project")}
							className="themeBtn2 mt-4 h3"
						>
							LETS START
						</button>
					</div>
					<div className="col-12 col-md-7 order-1 order-md-2 mb-5 mb-md-0">
						<Slider {...settings}>
							{build4.map((prev, i) => {
								const { title, desc, img, bgColor } = prev;
								return (
									<div
										key={i}
										className={`build2_body d-flex align-items-center ${bgColor}`}
									>
										<div>
											<h1 className="font-weight-bold">{title}</h1>
											<h4>{desc}</h4>
										</div>
										<div>
											<img style={{ width: "100%" }} src={img} alt={title} />
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

const mapStatetoProps = (state) => {
	return {
		build4: state.Reducer.build4,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		build4Func: function () {
			dispatch(build4Func());
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Build4);
