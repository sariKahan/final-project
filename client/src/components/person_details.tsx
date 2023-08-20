import { DeletePerson } from "./delete_person";
import { UpdatePerson } from "./update_person";
import { useState } from "react";

export const PersonDetails = (props: any) => {
    const person = props.person;
    const dateOfBirth = new Date(person.person_date_of_birth);
    const [isShowUpdate, setIsShowUpdate] = useState(person.isShowUpdate);



    return <div className="card " >
        <div className="card-body d-flex justify-content-between">
            <h5 className="card-title">{person.person_name}</h5>
            <div className="d-flex align-items-start">
                <button title="edit" type="button" className="btn btn-light" onClick={() => { setIsShowUpdate(!isShowUpdate); }}><i className="bi bi-pencil-square"></i></button>
                <div className=""><DeletePerson setPeople={props.setPeople} personsControlMap={props.personsControlMap} id={person.idperson} /></div>
            </div>
        </div>
        {isShowUpdate && <UpdatePerson setIsShowUpdate={setIsShowUpdate} setPeople={props.setPeople} personsControlMap={props.personsControlMap} person={person} />}

    </div>

}