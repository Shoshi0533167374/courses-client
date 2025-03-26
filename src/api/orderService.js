import axios from "axios"

let baseUrl = "https://courses-server-xad8.onrender.com/api/orders";

export const fetchAddOrder = (order, authorization) => {
    let arr = order.courses;
    order.courses = arr.map(course => ({
        _id: course._id,
        name: course.name,
        price: course.price
    }));
    return axios.post(baseUrl, order, { headers: { authorization } });
}
