import { FormEvent, useState } from "react"
import { PersonDetailsForm } from "./person_details_form";
import { useDispatch } from "react-redux";
import { addPersonAPI } from "../api/person.api";
import { AnyAction } from "@reduxjs/toolkit";


export const AddPerson = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const addPersonOnclick =(event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const newPerson:Person={
            person_name: name,
        }
        dispatch(addPersonAPI(newPerson) as unknown as AnyAction)
    }


    return <div>
        <h3>add person</h3>
        <form onSubmit={(event:FormEvent<HTMLFormElement>) =>addPersonOnclick(event)}>
            <PersonDetailsForm name={name} setName={setName} />
        </form>
    </div>
}