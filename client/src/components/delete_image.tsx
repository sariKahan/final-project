import { useDispatch } from "react-redux";
import { deleteImageAPI } from "../api/image.api";
import { AnyAction } from "@reduxjs/toolkit";

export const DeleteImage = (props: any) => {
    const image = props.image;
    const dispatch = useDispatch();
    const delImage = () => {
        const result = confirm("Are you sure you want to delete this image?");
        if (result) {
            dispatch(deleteImageAPI(image.idimage) as unknown as AnyAction)
        }
    }
    return <div>
        <button title="delete" className="btn" onClick={() => delImage()}><i className="bi bi-trash3"></i></button>
    </div>
}

