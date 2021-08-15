import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./helpers/scrollToTop";
import CastScreen from "./pages/CastScreen";
import FilteredListScreen from "./pages/FilteredListScreen";
import HomeScreen from "./pages/HomeScreen";
import MovieScreen from "./pages/MovieScreen";

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<Route path='/' exact component={HomeScreen} />
			<Route path='/movies/:genre' component={HomeScreen} />
			<Route path='/movie/:id' component={MovieScreen} />
			<Route path='/cast/:id' component={CastScreen} />
			<Route path='/:filteredKeyword' exact component={FilteredListScreen} />
		</Router>
	);
};
export default App;
