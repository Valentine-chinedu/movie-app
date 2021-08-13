import { combineReducers } from "redux";
import actorsReducer from "./actorsReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import moviesReducer from "./moviesReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
	movies: moviesReducer,
	movieDetails: movieDetailsReducer,
	searchResults: searchReducer,
	actorDetails: actorsReducer,
});
