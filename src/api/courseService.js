import axios from "axios"

let baseUrl = "https://courses-server-xad8.onrender.com/api/courses";

export const fetchAllCourses = (page, limit) => {
    return axios.get(`${baseUrl}?limit=${limit}&page=${page}`);
}

export const fetchTotalPagesCount = (limit) => {
    return axios.get(`${baseUrl}/total?limit=${limit}`);
}

export const fetchAddCourse = (course, authorization) => {
    return axios.post(baseUrl, course, { headers: { authorization } });
}

export const fetchGetCourseById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
}

export const fetchDeleteCourseById = (id,authorization) => {
    return axios.delete(`${baseUrl}/${id}`, { headers: { authorization } });
}

export const fetchUpdateCourse = (updatedCourse, authorization) => {
    return axios.put(`${baseUrl}/${updatedCourse._id}`, updatedCourse, { headers: { authorization } });
}
