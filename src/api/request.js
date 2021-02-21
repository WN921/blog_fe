import { axiosInstance, userId } from "./config";

export const register = (data) => {
    return axiosInstance.post("/api/user", data);
}
export const login = (data) => {
    return axiosInstance.post("/api/user/login", data);
}

export const getBlogList = (params) => {
    return axiosInstance.get('/api/blog', {params});
}

export const getBlog = (id) => {
    return axiosInstance.get(`/api/blog/${id}`);
}

export const countBlog = () => {
    return axiosInstance.get(`/api/blog/count/id?userId=${userId}`);
}
