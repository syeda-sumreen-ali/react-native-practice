import { types } from '../../actionTypes'

const initialState = {
	isContributerLoading: false,
	contributer: {}
}

export const contributerReducer = (contributer = initialState, action) => {
	console.log(action)
	switch (action.type) {
		case types.CREATE_CONTRIBUTER_START:
			return { ...contributer, isContributerLoading: true }

		case types.CREATE_CONTRIBUTER_SUCCESS:
			return { ...contributer, contributer: { contributer: action.contributer }, isContributerLoading: false }

		case types.CREATE_CONTRIBUTER_FAILED:
			return { ...contributer, isContributerLoading: false }
		default:
			return contributer
	}
}