import { useState } from "react";
import { DetailsImage } from "./details_image";
import { useNavigate } from "react-router-dom";
import { UpdateImageDialogs } from "./update_image_dialogs";
import { DeleteImage } from "./delete_image";
import { DownloadImage } from "./download_image";
import { BigImageDialog } from "./big_image_dialog";
import { Print } from "./print";

export const ShowOneImage = (props: any) => {
    const image: Image = props.image;
    const [isShowOption, setIsShowOption] = useState(false);
    const [isBig, setIsBig] = useState(false);
    const navigate = useNavigate();

    // {image.image_url}
    return <div onMouseOver={() => { setIsShowOption(true); }} onMouseLeave={() => setIsShowOption(false)}>
        <img onMouseOver={(event) => (event.target as any).classList.add('opacity-75')}
            onMouseLeave={(event) => (event.target as any).classList.remove('opacity-75')}
            src={image.image_url} className="rounded float-start" title={image.image_name}
            onDoubleClick={() => setIsBig(true)} />
        {isShowOption && <div>
            <div className="position-absolute p-2">
                <DetailsImage image={image} />
                <UpdateImageDialogs image={image} />
                <DeleteImage image={image} />
            </div>
            <div className="d-flex position-absolute mx-5 p-2">
                <DownloadImage image={image} />
                <Print image={image} />
            </div>
        </div>}

        {isBig && <BigImageDialog setIsBig={setIsBig} image={image} />}
    </div>
}