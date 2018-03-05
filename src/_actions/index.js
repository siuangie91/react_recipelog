export const SET_RECIPE = 'SET_RECIPE';

export function setRecipe(recipe) {
	return {
		recipe,
		type: SET_RECIPE
	}
}