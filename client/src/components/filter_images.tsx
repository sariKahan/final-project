import { useDispatch } from "react-redux"
import { filter } from "../app/features/imageSlice";
import { useNavigate } from "react-router-dom";


export const FilterImages = () => {

    const dispatch= useDispatch();
    const navigate= useNavigate()

    return <div className="d-flex w-300px" role="search">
        <input className="form-control w-40vw" type="search" placeholder="Start typing to show images by..." aria-label="Search" 
        onChange={(event)=>{
            navigate("show-images");dispatch(filter({filterImgBy:event.target.value}))}} />
    </div>
}