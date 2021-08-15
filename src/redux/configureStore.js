import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	movieDetailsReducer,
	movieListReducer,
	movieVideoReducer,
} from "./reducers/moviesReducer";
import { genreListReducer } from "./reducers/genreListReducers";
import { castDetailsReduce, castListReducer } from "./reducers/castReducers";

const reducer = combineReducers({
	movieList: movieListReducer,
	movieDetails: movieDetailsReducer,
	movieVideo: movieVideoReducer,
	genreList: genreListReducer,
	castList: castListReducer,
	castDetails: castDetailsReduce,
});

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
