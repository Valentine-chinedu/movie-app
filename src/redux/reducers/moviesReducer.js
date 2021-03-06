const movieListReducer = (state = { movies: [] }, action) => {
	switch (action.type) {
		case "FETCH_MOVIE_LIST_REQUEST":
			return { ...state, loading: true };
		case "FETCH_MOVIE_LIST_SUCCESS":
			return { ...state, loading: false, movies: action.payload };

		default:
			return state;
	}
};

const movieDetailsReducer = (state = { movie: { genres: [] } }, action) => {
	switch (action.type) {
		case "FETCH_MOVIE_DETAILS_REQUEST":
			return { ...state, loading: true };
		case "FETCH_MOVIE_DETAILS_SUCCESS":
			return { ...state, loading: false, movie: action.payload };

		default:
			return state;
	}
};

const movieVideoReducer = (state = { videos: [{ key: "" }] }, action) => {
	switch (action.type) {
		case "FETCH_MOVIE_VIDEO_REQUEST":
			return { ...state, loading: true };
		case "FETCH_MOVIE_VIDEO_SUCCESS":
			return { ...state, loading: false, videos: action.payload };
		default:
			return state;
	}
};

export { movieListReducer, movieDetailsReducer, movieVideoReducer };
