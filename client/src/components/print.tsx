import { useRef } from "react";
import ReactToPrint from "react-to-print";

export const Print = (props: any) => {
    const url = props.image.image_url;
    const componentToPrint = useRef(null);
    return <div>
        <ReactToPrint
            trigger={() => (
                <button title="print" className="btn" id={"print"} >
                    <i className="bi bi-printer"></i>
                </button>
            )}
            content={() => componentToPrint.current}
        />
        <div className="d-none">
            <img ref={(el) => { ((componentToPrint as any).current = el) }} src={url} className="w-100 m-0 h-100"></img>
        </div>
    </div>
}
