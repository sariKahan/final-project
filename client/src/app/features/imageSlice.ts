import { createSlice } from '@reduxjs/toolkit'
import { getAllImagesAPI, addImageAPI, updateImageAPI, deleteImageAPI } from '../../api/image.api'
const initValue = {
    images: [] as Image[],
    filterImages: [] as Image[],
    filterImgBy: ''
};

const compatibleFiltering = (filterBy:string,img: Image) => 
(
    img.image_name.includes(filterBy) ||
    img.category?.category_description.includes(filterBy) ||
    img._.find((p) => p.person_name.includes(filterBy))
)

const imagesSlice = createSlice({
    name: "imagesSlice",
    initialState: initValue,
    reducers: {
        filter: (state, action) => {
            const filterBy = action.payload.filterImgBy;
            state.filterImgBy = filterBy;
            const allImages: Image[] = state.images
            state.filterImages = allImages.filter((img: Image) => (
                compatibleFiltering(filterBy,img)
            ))
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllImagesAPI.fulfilled, (state, action) => {
                state.images = action.payload;
                (action.payload as any).filterImgBy = state.filterImgBy;
                imagesSlice.caseReducers.filter(state,action);
            })
            .addCase(getAllImagesAPI.rejected, (state, action) => {
                alert(action.error.message);
            })
            .addCase(addImageAPI.fulfilled, (state, action) => {
                const image: Image = (action.meta.arg) as Image;
                image.idimage = (action.payload as any).data.idimage;
                state.images.push(image);
                
                if(compatibleFiltering(state.filterImgBy,image))
                    state.filterImages.push(image)
                alert("sucsses add image");
            })
            .addCase(addImageAPI.rejected, (state, action) => {
                alert(action.error.message);
            })
            .addCase(updateImageAPI.fulfilled, (state, action) => {
                const image:Image = action.meta.arg.image;
                const findIndex = state.images.findIndex((img:Image) => img.idimage === action.meta.arg.id);
                image.idimage = action.meta.arg.id;
                state.images[findIndex] = image;
                (action.payload as any).filterImgBy = state.filterImgBy;
                imagesSlice.caseReducers.filter(state,action);
                alert("sucsses update image");
            })
            .addCase(updateImageAPI.rejected, (state, action) => {
                alert(action.error.message);
            })
            .addCase(deleteImageAPI.fulfilled, (state, action) => {
                const indexDel: number = state.images.findIndex((img:Image) => img.idimage === (action.meta.arg));
                state.images.splice(indexDel, 1);
                (action.payload as any).filterImgBy = state.filterImgBy;
                imagesSlice.caseReducers.filter(state,action);
                alert("sucsses dalete image");
             })
             .addCase(deleteImageAPI.rejected, (state, action) => {
                alert(action.error.message);
             })
    }
});


export default imagesSlice.reducer;
export const { filter } = imagesSlice.actions