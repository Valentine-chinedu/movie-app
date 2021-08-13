import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import logger from "./middleware/logger";
import reducers from "./reducers";
import monitorReducerEnhancer from "./enhancer/monitorReducer";

export default function configureStore(preloadedState) {
	const middlewares = [logger, thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancer = [middlewareEnhancer, monitorReducerEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancer);

	const store = createStore(reducers, preloadedState, composedEnhancers);

	return store;
}
