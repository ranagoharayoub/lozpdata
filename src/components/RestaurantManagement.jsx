import React, { useEffect } from "react";
import { connect } from "react-redux";
import { restaurantManagementFunc } from "../redux/actions";

const RestaurantManagement = ({
	restaurantManagementFunc,
	restaurantManagement,
}) => {
	useEffect(() => {
		restaurantManagementFunc();
	}, [restaurantManagementFunc]);
	return (
		<div className="UIUXSection_container">
			<div className="container-fluid">
				<div className="row">
					<h1 className="display-4 themeText text-center col-11 col-sm-9 col-md-8 mx-auto">
						RESTAURANT MANAGEMENT
					</h1>
					<h4 className="col-11 col-sm-9 col-md-8 mx-auto text-center lightColor">
						Set up your restaurant operations Online with 100% security. Increase your restaurant sales by 2X e-commerce Integration which is Fast, Affordable, Smart, Adaptable, Secure, And Trusted.
					</h4>
				</div>
				<br />
				<div className="row mt-5">
					{restaurantManagement.map((prev, i) => {
						return (
							<div
								key={i}
								className="col-11 col-sm-9 col-md-6 col-lg-4 mx-auto my-4"
							>
								<h3 className="grid_sideLine pl-4 themeText">{prev.title}</h3>
								<h5 className="pl-4">{prev.desc}</h5>
							</div>
						);
					})}
				</div>
				<br />
				<br />
				<br />
				<div className="text-center">
					<button style={{ borderRadius: "8px" }} className="themeBtn">
						START PROJECT
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		restaurantManagement: state.Reducer.restaurantManagement,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		restaurantManagementFunc: function () {
			dispatch(restaurantManagementFunc());
		},
	};
};
export default connect(
	mapStatetoProps,
	mapDispatchtoProps
)(RestaurantManagement);
