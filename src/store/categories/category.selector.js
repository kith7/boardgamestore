import { createSelector } from "reselect";
// your selector does business transformation logic
//in pure fucntions as long as input stays the same the output should stay the same too
//provide input selectors and outputselectors

const selecCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selecCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selecCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selecCategoriesIsLoading = createSelector(
  [selectCategories],
  (categoriesSlice) => categoriesSlice.isLoading
);
