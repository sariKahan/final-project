import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios"
import config from "../config";


export const getAllImagesAPI = createAsyncThunk("image/getAllImagesAPI", async () =>
    (await axios.get(`${config.api}/image`)).data
)


export const addImageAPI = createAsyncThunk("image/addImageAPI", async (image: Image) =>
    await axios.post(`${config.api}/image`, image)
)

export const updateImageAPI = createAsyncThunk("image/updateImageAPI", async (obj:{id:number,image: Image}) =>
    await axios.patch(`${config.api}/image/${obj.id}`, obj.image)
)

export const deleteImageAPI = createAsyncThunk("image/deleteImageAPI", async (id:number) =>
    await axios.delete(`${config.api}/image/${id}`)
)