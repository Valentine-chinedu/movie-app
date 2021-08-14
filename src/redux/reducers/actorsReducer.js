import { FETCH_ACTORDETAILS } from "../actions/types";

const actorDetails = (state = {}, action) => {
	if (action.type === FETCH_ACTORDETAILS) {
		return action.payload;
	}
	return state;
};

export default actorDetails;
