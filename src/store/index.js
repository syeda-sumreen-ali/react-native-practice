import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { themeReducer, contributerReducer } from './reducers';
//Redux Thunk middleware allows you to write action creators that return a function instead of an action.
//The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
export default createStore(
	//A reducing function that returns the next state tree, given the current state tree and an action to handle.

	combineReducers({
		theme: themeReducer,
		contributer: contributerReducer
	}),
	{}, // preloaded or initialState
	applyMiddleware(thunk) //enhancer for apply third-party
);