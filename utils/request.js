import axios from "axios";

axios.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    async (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const http = {
    get: (url, params = {}, config = {}) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "get",
                url,
                params,
                ...config,
            })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    post: (url, data = {}, config = {}) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "post",
                url,
                data,
                ...config,
            })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    delete: (url, params = {}, config = {}) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "delete",
                url,
                params,
                ...config,
            })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    put: (url, data = {}, config = {}) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "put",
                url,
                data,
                ...config,
            })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
};

export default http;
