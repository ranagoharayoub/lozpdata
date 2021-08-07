import React from "react";

const Delivered2 = ({ laptop1, laptop2, laptop3 }) => {
	return (
		<div className="delivered2_container">
			<div className="container-fluid">
				<div className="text-center mt-5 px-2">
					<h1 className="display-4">WHAT WE DEILIVERED</h1>
					<h5 className="row">
						<div className="col-11 col-sm-10 col-md-8 mx-auto">
							We know that if the client’s project launches smoothly, they’ll come back for more. We're willing to over-invest in guaranteeing results, rather than under-invest to make our financial reports look pretty in the short-run.
						</div>
					</h5>
				</div>
				<div className="row">
					<div className="col-11 col-md-6 mx-auto align-self-center order-2 order-md-1">
						<h1 className="display-4 text-center text-sm-left">
							Choose an individual tours
						</h1>
						<h4 className="text-center text-sm-left">
							Our individual tour offer you a unique and personalized experience in any destination.
		                                         Design all-in-one highend tour agency panel with this feature for users as well.
						</h4>
					</div>
					<div className="col-12 col-md-6 order-1 order-md-2">
						<img style={{ width: "100%" }} src={laptop1} alt="laptop" />
					</div>

					<div className="col-12 col-md-6 order-4 order-md-3">
						<img style={{ width: "100%" }} src={laptop2} alt="laptop" />
					</div>
					<div className="col-11 col-md-6 mx-auto align-self-center order-4 order-md-3">
						<h1 className="display-4 text-center text-sm-left">Our Tours</h1>
						<h4 className="text-center text-sm-left">
							Looking for your next great adventure? We can help. Experience private tours with authentic local flavour.
						</h4>
					</div>

					<div className="col-11 col-md-6 mx-auto align-self-center order-6 order-md-5">
						<h1 className="display-4  text-center text-sm-left">News</h1>
						<h4 className="text-center text-sm-left">
							We become your dedicated partner. Which means we won’t finish a project until both we, and you, are 100% happy. With a client satisfaction rate of over 97%, we’re considered a key strategic technology partner.
						</h4>
					</div>
					<div className="col-12 col-md-6 order-5 order-md-6">
						<img style={{ width: "100%" }} src={laptop3} alt="laptop" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Delivered2;
