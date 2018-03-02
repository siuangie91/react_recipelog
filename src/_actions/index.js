export const SET_RECIPE = 'SET_RECIPE';

export function setRecipes(recipes) {
	return {
		recipes,
		type: SET_RECIPE
	}
}