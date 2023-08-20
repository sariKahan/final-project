import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { DownloadImage } from './download_image';
import { Print } from './print';

export const BigImage = (props: any) => {
    const arrImages: Image[] = useSelector((state: any) =>
        state.imageSlice.filterImages,
    )
    const image: Image = props.image;
    const [index, setIndex] = useState(arrImages.findIndex((img) => img.idimage === image.idimage));
    const imgBefore = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1)
            props.setImgName(arrImages[index].image_name);
        }

    }
    const imgAfter = () => {
        if (index + 1 < arrImages.length) {
            setIndex(index + 1);
            props.setImgName(arrImages[index].image_name);
        }

    }
    return <div>
        <div className='position-absolute end-0 mx-3 d-flex'>
            <DownloadImage image={arrImages[index]}/>
            <Print image={arrImages[index]}/>
        </div>
        <div className='d-flex justify-content-between align-items-center m-0'>
            <button title='before' className='btn btn fs-1 m-3' onClick={imgBefore}><i className="bi bi-chevron-double-left"></i></button>
            <img className="w-auto h-85vh" src={arrImages[index].image_url}></img>
            <button title='after' className='btn fs-1 m-3 float-end' onClick={imgAfter}><i className="bi bi-chevron-double-right"></i></button>
        </div>
    </div>

}
