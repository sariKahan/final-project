import { useState } from "react";
import { PersonDetails } from "./person_details";
import { useSelector } from "react-redux";
import { AddPersonDialog } from "./add_person_dialog";

export const CheckboxPersons = (props: any) => {
    const persons: Person[] = useSelector((state: any) => {
        return state.personSlice.persons;
    });

    const [personsControlMap] = useState(new Map<number, Person>());
    const imagePersons = props.people || [];
    setTimeout(() => {
        imagePersons.forEach((p: Person) => {
            personsControlMap.set(p.idperson || 0, p);
            const cb = document.getElementById(`${p.idperson}`);
            if (cb)
                (cb as any).checked = true
        });
    }, 0)

    const onChangePersonCheckbox = (e: React.ChangeEvent<HTMLInputElement>, person: Person) => {
        if (e.target.checked) {
            personsControlMap.set(person.idperson || 0, person);
        }
        else
            personsControlMap.delete(person.idperson || 0);
        props.setPeople(Array.from(personsControlMap.values()));
    }

    return <div className="w-100">
        <label className="fs-5 float-start mb-1">select people:</label><br />
        <p className="clear-left float-start fs-small mb-1">The photos that will be uploaded now will be saved for each person you choose.</p>
        <div className="btn-group flex-wrap w-100 mw-50" role="group" aria-label="Basic checkbox toggle button group">
            <div className="w-100">
                {persons?.map((p: Person) =>
                    <div className="w-40vw" key={p.idperson}>
                        <input type="checkbox" className="btn-check" id={(p.idperson || 0).toString()} autoComplete="off" onChange={e => onChangePersonCheckbox(e, p)} />
                        <label className="btn btn-outline-primary w-100" htmlFor={(p.idperson || 0).toString()}>
                            <PersonDetails setPeople={props.setPeople} personsControlMap={personsControlMap} person={p} ></PersonDetails>
                        </label>
                    </div>)}
                <div className="btn btn-outline-primary w-100">
                    <AddPersonDialog />
                </div>
            </div>
        </div></div>
}