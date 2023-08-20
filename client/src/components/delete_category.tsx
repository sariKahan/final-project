import { useDispatch } from "react-redux";
import { delCatregoryAPI } from "../api/category.api";
import { AnyAction } from "@reduxjs/toolkit";
import { getAllImagesAPI } from "../api/image.api";


export const DeleteCategory = (props: any) => {
    const idCategory: number = parseInt(props.idCategory)
    const dispatch = useDispatch();
    const delCatregory = async () => {
        const result = confirm(`Are you sure you want to delete this category?\n ⚠ Worning!!!\nDeleting a category will delete all images belonging to the category`);
        if (result) {
            await dispatch(delCatregoryAPI(idCategory) as unknown as AnyAction);
            dispatch(getAllImagesAPI() as unknown as AnyAction)
            if(props.setCategory){
                props.setCategory(undefined);
            }
        }
    }

    return <button title="delete" className="btn float-end " onClick={() => delCatregory()}><i className="bi bi-trash3"></i></button>
}