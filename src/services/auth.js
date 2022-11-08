import { api, handleResponse, handleError } from "./apiService";

export const login = (data) =>
  api().post("/admin/login", data).then(handleResponse).catch(handleError);

export const signout = () =>
  api().get("/admin/logout").then(handleResponse).catch(handleError);

export const addProfile = (token, data) =>
  api(token)
    .post("/add/profile/details", data)
    .then(handleResponse)
    .catch(handleError);

export const getProfile = (token) =>
  api(token).get("/profile/details").then(handleResponse).catch(handleError);

export const editProfile = (token, data) =>
  api(token)
    .put(`/update/profile/details/${data.id}`, data)
    .then(handleResponse)
    .catch(handleError);
