import axios from 'axios';
import React from 'react';

const UseAxiosSequre = () => {
    const axiosSequre = axios.create({
  baseURL: 'https://studymate-api-server-pi.vercel.app',
 
});
    return axiosSequre 
};

export default UseAxiosSequre;