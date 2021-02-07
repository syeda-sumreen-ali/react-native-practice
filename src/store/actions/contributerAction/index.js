import { types } from '../../actionTypes'

export const createContributer = (payload) => dispatch => {
	try {
		dispatch({ type: types.CREATE_CONTRIBUTER_START })
		//call api here
		setTimeout(() => {

			dispatch({ type: types.CREATE_CONTRIBUTER_SUCCESS, contributer: payload })
		}, 3000);
		//if sucess dispatch success else dispatch failed

	} catch (error) {
		console.log(error)
	}
}