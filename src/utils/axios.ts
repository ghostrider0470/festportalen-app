// src/utils/axios.ts
import axios from 'axios';
import {useAuth} from "../hooks/auth.ts";
import axiosRetry from "axios-retry";

axiosRetry(axios, {retries: 10});
axios.interceptors.request.use(function (config) {
    const authState = useAuth();
    // Check if the URL is not the login URL
    if (config.url !== `${import.meta.env.VITE_API_URL}/auth/login`) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${authState.token}`;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// axios.interceptors.response.use(function (response: AxiosResponse<AuthState>) {
//
//     if (response.config.url === `${import.meta.env.VITE_API_URL}/auth/login`) {
//         if(response.data.succeeded) {
//             console.log('response:', response.data);
//             persistAuthState(response.data);
//         }
//         axios.get(`${import.meta.env.VITE_API_URL}/users/me`)
//             .then((userAxiosResponse: AxiosResponse<User>) => {
//                 const user = userAxiosResponse.data;
//                 response.data.user = user;
//                 persistAuthState(response.data);
//             });
//     }
//
//     return response;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });
//
export default axios;