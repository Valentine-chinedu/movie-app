import { FETCH_MOVIES } from "../actions/types";

const movies = (state = [], action) => {
	if (action.type === FETCH_MOVIES) {
		if (action.payload.page === 1) {
			return action.payload;
		}

		return {
			page: action.payload.page,
			results: [...state.results, ...action.payload.results],
		};
	}

	return state;
};

export default movies;
