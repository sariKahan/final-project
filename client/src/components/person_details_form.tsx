
export const PersonDetailsForm = (props: any) => {
    return <div>
        <div className="form-floating mb-3 mt-3">
            <input type="text" className="form-control" id="personName" placeholder="person name" name="person_name" required
                value={props.name} onChange={e => props.setName(e.target.value)} />
            <label htmlFor="person_name">person name</label>
        </div>
        <button type="submit" className="btn btn-light" >OK</button>
    </div>
}