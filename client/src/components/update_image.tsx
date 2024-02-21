import { SelectAllCategories } from './select_all_categories';
import { CheckboxPersons } from './checkbox_persons';

export const UpdateImage = (props: any) => {
 
  return <div>
    <div className="row">
      <div className="col d-flex align-items-center flex-wrap align-content-stretch flex-row">
        <div className="form-floating mb-3 mt-3 w-100">
          <input type="text" className="form-control" id="userName" placeholder="name" required name="name" value={props.newName} onChange={event => props.setNewName(event?.target.value)} />
          <label htmlFor="userName">name</label>
        </div>
        <SelectAllCategories category={props.category} setCategory={props.setCategory} />
        <CheckboxPersons people={props.people} setPeople={props.setPeople} />
      </div>
      <div className="overflow-y-auto col frame d-flex justify-content-evenly align-items-center flex-wrap align-content-stretch flex-row">
        <img src={props.img.image_url}></img>
      </div>
    </div>
  </div>


}
