import { ChangeEvent, FormEvent, useState } from "react"
import { CheckboxPersons } from "./checkbox_persons"
import { SelectAllCategories } from "./select_all_categories"
import { UploadImages } from "./upload_images"
import { upload } from "../firebase/upload-files/storage_upload_file"
import { useDispatch } from "react-redux"
import { addImageAPI } from "../api/image.api"
import { AnyAction } from "@reduxjs/toolkit"

export const AddImages = () => {
    const [imgFiles, setImgFiles]: any[] = useState([]);
    const [category, setCategory] = useState();
    const [people, setPeople] = useState([]);

    const dispatch = useDispatch()

    const addImages = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        event.preventDefault();
        if (!category || !imgFiles[0]) {
            alert("Not all requierd fields have been filled")
        }
        else {
            for (let imgFile of imgFiles) {
                addOneImage(imgFile);
            }
        }
    }

    const addOneImage = async (imgFile: any) => {
        if (imgFile['type'].split('/')[0] === 'image') {
            const url = await upload(imgFile);
            const image: Image = {
                image_name: imgFile.name,
                image_url: url,
                image_creation_date: imgFile.lastModifiedDate,
                category,
                _: people,

            };
            dispatch(addImageAPI(image) as unknown as AnyAction);
            alert("add image")
        }
    }
    return <div>
        <div className="row">
            <div className="col d-flex align-items-center flex-wrap align-content-stretch flex-row">
                <h3 className="m-auto">add images</h3>
                <UploadImages imgFiles={imgFiles} setImgFiles={setImgFiles} />
                <SelectAllCategories category={category} setCategory={setCategory} />
                <CheckboxPersons setPeople={setPeople} />
            </div>
            <div className="overflow-y-auto col frame d-flex justify-content-evenly align-items-center flex-wrap align-content-stretch flex-row">
                {imgFiles[0] && Array.from(imgFiles)?.map((imgFile: any) => <img key={imgFile} src={URL.createObjectURL(imgFile)}></img>)}
            </div>
        </div>
        <input onClick={async (event) => addImages(event)} type="button" className="btn btn-light mx-auto w-65vw" value="submit" />
    </div>
}
