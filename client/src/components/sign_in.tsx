import { FormEvent, useState } from "react"
import axios from 'axios'
import config from '../config'
import { Link, useNavigate } from "react-router-dom";


export const Sign_in = () => {

    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();
    const sign_in = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${config.api}/auth/signin`, {
                name: userName,
                password: pwd
            })
            const token = response.data['access_token'];
            sessionStorage.setItem('token', token);
            navigate('/home/show-images')
        }
        catch (e: any) {
            alert(e.response?.data.message);
        }
    }

    return <div>
        <div className="m-5">
            <p className="fs-6 text-light float-end claer-right m-0 ts-black">Don't have an account yet?</p><br/>
            <p className="fs-6 text-light float-end claer-right m-0 ts-black">Join here and upload your photos!</p><br/>
            <Link className="float-end nav-link active text-white text-decoration-underline fs-3 claer-right" to="/sign-up">sign up<i className="bi bi-person-plus-fill mx-2"></i></Link>
        </div><br />
        <div className="card bg-white bg-opacity-50 card-frame m-auto">
            <h3>sign in</h3>
            <form onSubmit={(event) => sign_in(event)}>
                <div className="form-floating mb-3 mt-3 ">
                    <input type="text" className="form-control" id="userName" placeholder="user name" required name="userName" value={userName} onChange={event => setUserName(event?.target.value)} />
                    <label htmlFor="userName">user name</label>
                </div>
                <div className="form-floating mt-3 mb-3">
                    <input type="password" className="form-control" id="pwd" required placeholder="password" name="pwd" value={pwd} onChange={event => setPwd(event?.target.value)} />
                    <label htmlFor="pwd">password</label>
                </div>
                <button type="submit" className="btn btn-light">sign in</button>
            </form>
        </div>
    </div>
}