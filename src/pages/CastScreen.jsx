import React from "react";
import CastDetails from "../components/castdetails/CastDetails";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const CastScreen = ({ match }) => {
	return (
		<>
			<Header />
			<Sidebar />
			<CastDetails id={match.params.id} />
			<Footer />
		</>
	);
};

export default CastScreen;
