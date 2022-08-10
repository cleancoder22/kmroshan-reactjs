import axios from "axios";

const axiosConfig: any = {
};

if (process.env.REACT_APP_API_TOKEN) {

axiosConfig.headers = {
  "Authorization": `${process.env.REACT_APP_API_TOKEN}`
};
}
const apiInstance = axios.create(axiosConfig);

apiInstance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (err) {
    if (401 === err.response?.status && err.response?.headers?.location) {
      window.location = err.response?.headers?.location;
    }
    return Promise.reject(err?.response?.data);
  }
);

const get = (path: string, config = {}, instance = apiInstance) => {
  return new Promise((resolve, reject) => {
    instance
      .get(path)
      .then((response) => resolve(response.data))
      .catch((error) => {
        reject(error);
      });
  });
};

const post = (path: string, data: {}, instance = apiInstance) => {
  return new Promise((resolve, reject) => {
    instance
      .post(path, data)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const getProducts = () => {
  return get(`https://upayments-studycase-api.herokuapp.com/api/products`);
};

export const getProduct = (id: string | undefined) => {
  return get(
    `https://upayments-studycase-api.herokuapp.com/api/products/${id}`
  );
};

export const getCatagories = () => {
  return get(` https://upayments-studycase-api.herokuapp.com/api/categories/`);
};

export const getCatagory = (id: string | undefined) => {
  return get(
    `https://upayments-studycase-api.herokuapp.com/api/categories/${id}`
  );
};

export const postProduct = (data: {}) => {
  return post(
    ` https://upayments-studycase-api.herokuapp.com/api/products
    `,
    data
  );
};
