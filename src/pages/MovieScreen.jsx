import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MovieDetails from "../components/moviedetails/MovieDetails";
import MovieList from "../components/movielist/MovieList";
import Sidebar from "../components/sidebar/Sidebar";

const MovieScreen = ({ match }) => {
	return (
		<div>
			<Header />
			<Sidebar genreName='' />
			<MovieDetails id={match.params.id} />
			<MovieList movieId={match.params.id} />
			<Footer />
		</div>
	);
};

export default MovieScreen;
