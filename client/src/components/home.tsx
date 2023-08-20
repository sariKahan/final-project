import { Outlet, useNavigate } from "react-router-dom"
import { NavBar } from "./nav_bar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getAllCategoriesAPI } from "../api/category.api"
import { AnyAction } from "@reduxjs/toolkit"
import { getPersonsAPI } from "../api/person.api"
import { getAllImagesAPI } from "../api/image.api"

export const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem('token')){
            navigate("/sign-in")
        }
        else{
            dispatch(getAllCategoriesAPI() as unknown as AnyAction)
            dispatch(getPersonsAPI() as unknown as AnyAction)
            dispatch(getAllImagesAPI() as unknown as AnyAction)
        }
    },[])

    return <div>
        <NavBar />
        <div className="card bg-white bg-opacity-50 card-frame" >
            <Outlet />
        </div>
    </div>
}