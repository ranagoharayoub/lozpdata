import React from "react";
import solution1 from "../assets/solution1.svg";
import solution2 from "../assets/solution2.svg";

const ChallengeAndSol = () => {
	return (
		<div className="challengeAndSolution_container">
			<div className="container-fluid">
				<div className="row">
					<div className="ESpace col-12 col-sm-10 col-md-6 mx-auto text-center align-self-center">
						<img style={{ width: "30%" }} src={solution1} alt="solution" />
					</div>
					<div className="ESpace col-12 col-sm-8 col-md-6 text-center text-md-left mx-auto align-self-center mt-5 mt-md-0">
						<h1 className="display-4">The challenge</h1>
						<h5>
							The information technology industry is highly complex, vast and dynamic.
							Software development is an integral part of the industry and is directly influenced by several factors,
							including growing complexities, market conditions, 
							changing technology trends as well as increasing software development challenges.
							But at the same time, technology evolving at a phenomenal rate leads to an added pressure for software development professionals to leverage these upcoming 
							technology trends in software product development to gain a cutting edge over competitors and stand out in the market.
							
						</h5>
					</div>

					<div className="col-12 col-sm-8 col-md-6 order-2 order-md-1 text-center text-md-left mx-auto align-self-center mt-5 mt-md-0">
						<h1 className="display-4">The solution</h1>
						<h5>
							We are always updated with the new technologies taking place around the globe. 
							As it is most important for us to give our customers up to mark information about our services.
							We are aimed at designing and developing software products that meet varied customer demands.
							We clearly understand the underlying business concept and bring in the required features to satisfy our growing customers.
							Our development teams have a clear understanding of the problems that lie ahead of them and a roadmap to overcome them.
							
						</h5>
					</div>
					<div className="col-12 col-sm-10 col-md-6 order-1 order-md-2 mx-auto text-center align-self-center mt-5 mt-md-0">
						<img style={{ width: "30%" }} src={solution2} alt="solution" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChallengeAndSol;
