import axios from "axios"

let baseUrl="https://courses-server-xad8.onrender.com/api/users";

export const fetchAddUser = (user) => {
    return axios.post(baseUrl,user);
}

export const fetchLogIn = (user) => {
    return axios.post(`${baseUrl}/login`,user);
}
