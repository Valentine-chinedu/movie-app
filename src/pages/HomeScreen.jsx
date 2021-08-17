import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MovieList from "../components/movielist/MovieList";
import Pagination from "../components/pagination/Pagination";
import Sidebar from "../components/sidebar/Sidebar";

const HomeScreen = ({ match }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<>
			<Header />
			<Sidebar genreName={match.params.genre} />
			<MovieList genre={match.params.genre} page={currentPage} />
			<Pagination pageChange={onPageChange} />
			<Footer />
		</>
	);
};
export default HomeScreen;
