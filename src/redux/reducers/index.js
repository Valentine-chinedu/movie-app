import { combineReducers } from "redux";
import actorsReducer from "./castReducers";
import movieDetailsReducer from "./genreListReducers";
import moviesReducer from "./moviesReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
	movies: moviesReducer,
	movieDetails: movieDetailsReducer,
	searchResults: searchReducer,
	actorDetails: actorsReducer,
});
