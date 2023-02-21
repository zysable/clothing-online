import { createSelector } from 'reselect'
import { RootState } from '../store'
import { CategoriesState } from './categories.reducer'
import { CategoryMap } from './categories.type'

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category): CategoryMap => {
    const { title, items } = category
    acc[title.toLowerCase()] = items
    return acc
  }, {} as CategoryMap)
)
