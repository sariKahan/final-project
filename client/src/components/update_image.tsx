import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { SelectAllCategories } from './select_all_categories';
import { CheckboxPersons } from './checkbox_persons';
import { updateImageAPI } from '../api/image.api';
import { AnyAction } from '@reduxjs/toolkit';

export const UpdateImage = (props: any) => {
  // const [newName, setNewName]: any[] = useState(img.image_name);
  // const [category, setCategory] = useState(img.category);
  // const [people, setPeople] = useState(img._);
  // const dispatch = useDispatch()

  // const updateImage = () => {
  //   const image: Image = {
  //     image_name: newName,
  //     image_creation_date: img.image_creation_date,
  //     image_url: img.image_url,
  //     category: category,
  //     _: people
  //   }
  //   const obj = {
  //     id: img.idimage || 0,
  //     image: image
  //   }
  //   dispatch(updateImageAPI(obj) as unknown as AnyAction)

  // }
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
    {/* <input onClick={() => updateImage()} type="button" className="btn btn-light mx-auto w-65vw" value="submit" /> */}
  </div>


}
