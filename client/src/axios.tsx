import axios from "axios";

    axios.interceptors.request.use((req) => {
        req.headers.set('authorization', `Bearer ${sessionStorage.getItem('token')}`);
        return req;
     });


export default axios;