import { createSlice } from '@reduxjs/toolkit'
import { getAllCategoriesAPI, addCategoryAPI, updateCategoryAPI, delCatregoryAPI } from '../../api/category.api'
import imageSlice from './imageSlice';

const initCategories = {
    categories: [] as Category[],
};

const categoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState: initCategories,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategoriesAPI.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(getAllCategoriesAPI.rejected, (state, action) => {
                alert(action.error.message);
            })
            .addCase(addCategoryAPI.fulfilled, (state, action) => {
                const category: Category = (action.meta.arg) as Category;
                const idCategory: number = (action.payload as any).data.idcategory;
                category.idcategory = idCategory;
                state.categories.push(category);
                alert("sucsses adding category");
            })
            .addCase(addCategoryAPI.rejected, (state, action) => {
                alert(action.error.message);
            })
            .addCase(updateCategoryAPI.fulfilled, (state, action) => {
                const findIndex = state.categories.findIndex((c: Category) => c.idcategory === action.meta.arg.idCategory);
                state.categories[findIndex].category_description = action.meta.arg.category.category_description;
                alert("sucsses update category");

            })
            .addCase(updateCategoryAPI.rejected, (state, action) => {
                alert(action.error.message);
            })
            .addCase(delCatregoryAPI.fulfilled, (state, action) => {
                const indexDel: number = state.categories.findIndex((c: Category) => c.idcategory === (action.meta.arg));
                state.categories.splice(indexDel, 1);
                alert("sucsses dalete category");
            })
            .addCase(delCatregoryAPI.rejected, (state, action) => {
                alert(action.error.message);
            })
    }
})

export default categoriesSlice.reducer;