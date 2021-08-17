import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MovieList from "../components/movielist/MovieList";
import Sidebar from "../components/sidebar/Sidebar";

const FilteredListScreen = ({ match }) => {
	return (
		<>
			<Header />
			<Sidebar />
			<MovieList filteredKeyword={match.params.filteredKeyword} />
			<Footer />
		</>
	);
};

export default FilteredListScreen;
