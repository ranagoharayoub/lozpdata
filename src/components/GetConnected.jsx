import React from "react";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import linkdin from "../assets/linkdin.svg";
import skype from "../assets/skype.svg";

const GetConnected = () => {
	return (
		<div className="getConnected_container d-flex justify-content-center align-items-center mx-auto">
			<h1 className="pl-5 pr-3 pr-sm-5 py-2">GET CONNECTED</h1>
			<div className="ml-3 ml-sm-5 mt-n1 py-2 imgContainer">
				<a
					target="_blank"
					href="https://www.facebook.com/LozpDataSolutions/"
					rel="noreferrer"
				>
					<img src={fb} alt="facebook" />
				</a>
				<a
					target="_blank"
					href="https://www.instagram.com/lozpdata/"
					rel="noreferrer"
				>
					<img src={insta} alt="instagram" className="ml-3" />
				</a>
				<a
					target="_blank"
					href="https://www.linkedin.com/company/lozpdatasolutions/"
					rel="noreferrer"
				>
					<img src={linkdin} alt="linkdin" className="ml-3" />
				</a>
				<a
					target="_blank"
					href="https://join.skype.com/invite/dh0IZGiUglqF"
					rel="noreferrer"
				>
					<img src={skype} alt="skype" className="ml-3" />
				</a>
			</div>
		</div>
	);
};

export default GetConnected;
