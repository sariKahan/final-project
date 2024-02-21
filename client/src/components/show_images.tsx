import { ShowOneImage } from "./show_one_image";
import { useSelector } from 'react-redux'

export const ShowImages = () => {
    const arrImages: Image[] = useSelector((state: any) =>
        state.imageSlice.filterImages,
    )
    return <div id="showImages">
        {arrImages[0] ?
             arrImages?.map((img: Image) => <ShowOneImage key={img.idimage} image={img} />)
            :<div> <i className="bi bi-file-earmark-image text-white  fs-20vw"></i>
            <p>Your images pool is still empty.</p></div>}
    </div>


    // { arrImages?.map((img: Image) => <ShowOneImage key={img.idimage} image={img} />) }
// </div >
}
