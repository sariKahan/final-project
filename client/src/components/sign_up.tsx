import { FormEvent, useEffect, useState } from "react"
import axios from 'axios'
import config from '../config'
import { Sign_in } from "./sign_in";
import { Link, useNavigate } from "react-router-dom";


export const Sign_up = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    const [showError, setShowError] = useState(false);
    const sign_up = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isStrongPassword(pwd)) {
            setShowError(true)
        }

        else {
            setShowError(false);
            try {
                const response = await axios.post(`${config.api}/auth/signup`, {
                    name: userName,
                    password: pwd,
                    email: email

                })
                const token = response.data['access_token'];
                sessionStorage.setItem('token', token);
                navigate("/home/show-images");
            }
            catch (e: any) {
                alert(e.response?.data.message);
            }
        }
    }

    const isStrongPassword = (password: string) => {
        // Regular expressions to check for a strong password
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;

        // Check if the password meets the requirements
        const hasUppercase = uppercaseRegex.test(password);
        const hasLowercase = lowercaseRegex.test(password);
        const hasNumber = numberRegex.test(password);

        return (
            hasUppercase &&
            hasLowercase &&
            hasNumber &&
            password.length >= 8
        );
    }
    return <div>
        <div className="m-5">
            <p className="fs-6 text-light float-end claer-right m-0 ts-black">Already have an account?</p><br/>
            <p className="fs-6 text-light float-end claer-right m-0 ts-black">Enter here and upload your photos!</p><br/>
            <Link className="float-end nav-link active text-white text-decoration-underline fs-3 claer-right" to="/sign-in">sign in<i className="bi bi-box-arrow-in-right mx-2"></i></Link>
        </div>
        <div className="card bg-white bg-opacity-50 card-frame m-auto">
            <h3>sign up</h3>
            <form onSubmit={(event) => sign_up(event)} id="form">
                <div className="form-floating mb-3 mt-3 ">
                    <input type="text" className="form-control" id="userName" placeholder="user name" required name="userName" value={userName} onChange={event => setUserName(event?.target.value)} />
                    <label htmlFor="userName">user name</label>
                </div>
                <div className="form-floating my-3">
                    <input type="password" className="form-control" id="pwd"
                        required placeholder="password" name="pwd" value={pwd}
                        onChange={event => setPwd(event?.target.value)} />
                    <label htmlFor="pwd">password</label>
                    {!isStrongPassword(pwd) && showError && <p className="text-danger float-start mb-2">enter strong password</p>}
                </div>
                <div className="form-floating my-3">
                    <input type="email" className="form-control" id="email" placeholder="email" required name="email" value={email} onChange={event => setEmail(event?.target.value)} />
                    <label htmlFor="email">email</label>
                </div>
                <button type="submit" className="btn btn-light" disabled={false}>sign up</button>
            </form>
        </div>
    </div>
}
