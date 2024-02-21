import { FormEvent, useState } from "react";
import { PersonDetailsForm } from "./person_details_form";
import { useDispatch } from "react-redux";
import { updatePersonAPI } from "../api/person.api";
import { AnyAction } from "@reduxjs/toolkit";
import { getAllImagesAPI } from "../api/image.api";

export const UpdatePerson = (props: any) => {
    
    const person: Person = props.person;
    const [name, setName] = useState(person.person_name);
    const dispatch = useDispatch();
    const updatePersonOnclick = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const updatePerson: Person = {
            person_name: name,
        }
        const obj = {
            idperson: person.idperson || 0,
            newPerson: updatePerson
        }
       
        await dispatch(updatePersonAPI(obj) as unknown as AnyAction)
        dispatch(getAllImagesAPI() as unknown as AnyAction)
        if(props.personsControlMap){
            
            updatePerson.idperson = person.idperson;
            props.personsControlMap.set(updatePerson.idperson || 0, updatePerson);
            props.setPeople(Array.from(props.personsControlMap.values()));
        }
        if (props.setIsShowUpdate)
                props.setIsShowUpdate(false)

    }

    return <div>
        <form onSubmit={(event: FormEvent<HTMLFormElement>) => updatePersonOnclick(event)}>
            <PersonDetailsForm  setIsShowUpdate={props.setIsShowUpdate} name={name} setName={setName} />
        </form>
    </div>
}