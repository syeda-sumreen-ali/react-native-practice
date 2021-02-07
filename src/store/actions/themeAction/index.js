import { types } from '../../actionTypes'

export const setThemeAction = (themeName) => dispatch => {
	try {
		console.log("sadasdasdasdasdas", themeName);
		if (themeName === 'LIGHT_THEME') {
			dispatch({ type: types.SET_LIGHT_THEME })
		} else if (themeName === 'DARK_THEME') {
			dispatch({ type: types.SET_DARK_THEME })
		} else {
			console.log(`Error: invalid theme name ${themeName}`)
		}

	} catch (error) {
		console.log('error', error.message)
	}
	// console.log(themeName)
}