import { FETCH_SEARCH } from "../actions/types";

const search = (state = [], action) => {
	if (action.type === FETCH_SEARCH) {
		return action.payload;
	}
	return state;
};

export default search;
