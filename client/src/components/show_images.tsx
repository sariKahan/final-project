import { ShowOneImage } from "./show_one_image";
import {useSelector} from 'react-redux'

export const ShowImages =  () => {
    const arrImages:Image[]=useSelector((state:any)=>
       state.imageSlice.filterImages,
)
return<div id="showImages">
    {arrImages?.map((img:Image)=><ShowOneImage key={img.idimage} image={img}/>)}
</div>
}
