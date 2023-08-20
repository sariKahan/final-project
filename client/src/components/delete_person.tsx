import { useDispatch } from "react-redux"
import { deletePersonAPI } from "../api/person.api";
import { AnyAction } from "@reduxjs/toolkit";
import { getAllImagesAPI } from "../api/image.api";
// import { deletePerson } from "../app/features/personSlice";

export const DeletePerson = (props: any) => {
    const dispatch = useDispatch();
    const deletePersonOnlick = async () => {
        const result = confirm("Are you sure you want to delete this person?");
        if (result) {
            if(props.personsControlMap){
                props.personsControlMap?.delete(props.id || 0);
                props.setPeople(Array.from(props.personsControlMap.values()));
            }
            await dispatch(deletePersonAPI(props.id) as unknown as AnyAction);
            dispatch(getAllImagesAPI() as unknown as AnyAction);
        }
    }
    return <div>
        <button title="delete" className="btn btn-light" onClick={() => { deletePersonOnlick() }} ><i className="bi bi-trash3"></i></button>
    </div>
}