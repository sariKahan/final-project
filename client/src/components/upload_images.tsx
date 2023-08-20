
export const UploadImages = (props: any) => {
    const setImgFiles = props.setImgFiles;
    return <div className="w-100 mb-2">
        <label className="fs-5 float-start mt-1">upload images:</label>
        <input className="form-control" type="file" id="formFile" multiple onChange={(event) => { (event.target.files?.length) ? setImgFiles((event.target.files)) : null }} />
        {!props.imgFiles[0] && <p className="text-danger float-start m-0">required field</p>}
    </div>
} 
