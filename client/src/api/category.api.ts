import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import config from "../config";

export const getAllCategoriesAPI = createAsyncThunk("category/getAllCategoriesAPI", async () =>
   (await axios.get(`${config.api}/category`)).data
   )

export const addCategoryAPI = createAsyncThunk("category/addCategoryAPI", async (category: Category) =>
   await axios.post(`${config.api}/category`, category)
)

export const updateCategoryAPI = createAsyncThunk("category/updateCategoryAPI", async (obj: { idCategory: number, category: Category }) =>
   await axios.patch(`${config.api}/category/${obj.idCategory}`, obj.category)
)

export const delCatregoryAPI = createAsyncThunk("category/delCatregoryAPI", async (idCategory: number) =>{   
  return await axios.delete(`${config.api}/category/${idCategory}`)
  
  
}
)


