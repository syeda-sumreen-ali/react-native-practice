import { types } from '../../actionTypes'
import { DARK_THEME, LIGHT_THEME } from '../../../constants'

let initialState = {
	theme: LIGHT_THEME,
	activeThemeName: 'LIGHT_THEME'
}

const themeReducer = (theme = initialState, action) => {
	// console.log(action.type);
	switch (action.type) {

		case types.SET_DARK_THEME:
			return { ...theme, theme: DARK_THEME, activeThemeName: 'DARK_THEME' };

		case types.SET_LIGHT_THEME:
			return { ...theme, theme: LIGHT_THEME, activeThemeName: "LIGHT_THEME" };
		default:
			return theme;
	}

}

export default themeReducer