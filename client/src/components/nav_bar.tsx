import { dropInstance } from "localforage"
import { DetailedHTMLProps, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FilterImages } from "./filter_images";


export const NavBar = () => {
    const dropdownType = 'order by';
    const [dropdownBy, setDropdownBy] = useState('')
    const changeValue = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        setDropdownBy(": " + (event.target as HTMLElement).innerHTML);
        // ((document.querySelector(".button")) as HTMLButtonElement).innerHTML=value+":"+event.target.innerHTML;
    }
    const navigate = useNavigate();


    return <nav className="navbar bg-body-tertiary position-fixed top-0 z-1 w-100">
        <div className="container-fluid">
            <Link className="navbar-brand" to="show-images">
                <img src="../src/assets/PC cloud.png" className="my-0 w-40px h-30px"></img>
                <span> Photo cloud</span>
            </Link>
            <div className="d-flex">
                <Link className="nav-link active mx-3" to="show-images"><i className="bi bi-images mx-1"></i>images</Link>
                <Link className="nav-link active mx-3 " to="show-categories"><i className="bi bi-tags-fill mx-1"></i>categories</Link>
                <Link className="nav-link active mx-3" to="show-persons"><i className="bi bi-people-fill mx-1"></i>people</Link>
            </div>
            <FilterImages />
            <div>
                <button className="btn btn-outline-secondary btn-sm mx-1" type="button" onClick={() => navigate('/home/add-images')}>add image</button>
                <button className="btn btn-outline-secondary btn-sm mx-1" type="button" onClick={() => navigate('/home/add-category')}>add category</button>
                <button className="btn btn-outline-secondary btn-sm mx-1" type="button" onClick={() => navigate('/home/add-person')}>add person</button>
            </div>
        </div>
    </nav>

}