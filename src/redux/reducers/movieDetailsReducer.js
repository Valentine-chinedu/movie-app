import { FETCH_MOVIEDETAILS } from "../actions/types";

const movieDetails = (state = {}, action) => {
	if (action.type === FETCH_MOVIEDETAILS) {
		return action.payload;
	}
	return state;
};

export default movieDetails;
