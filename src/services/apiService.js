import axios from "axios";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI
  ? process.env.REACT_APP_BACKEND_URI
  : "";

export const api = (token) => {
  if (typeof token === "string" && token.split(".").length === 3)
    return axios.create({
      withCredentials: true,
      baseURL: `${BACKEND_URI}/api/`,
      headers: { authorization: token },
    });
  else
    return axios.create({
      withCredentials: true,
      baseURL: `${BACKEND_URI}/api/`,
    });
};

export const handleResponse = (res) => {
  try {
    const data = res.data;
    if (res.data.error) {
      const error = data.message ? data.message : data.error;
      return Promise.reject({ error });
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const handleError = (err) => {
  return err;
};
