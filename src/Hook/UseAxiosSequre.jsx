import axios from 'axios';
import React from 'react';

const UseAxiosSequre = () => {
    const axiosSequre = axios.create({
  baseURL: 'http://localhost:9000',
 
});
    return axiosSequre 
};

export default UseAxiosSequre;