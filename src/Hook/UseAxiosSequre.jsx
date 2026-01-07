import axios from 'axios';
import React from 'react';

const UseAxiosSequre = () => {
    const axiosSequre = axios.create({
  baseURL: 'https://schorship-as11-server-side.vercel.app',
 
});
    return axiosSequre 
};

export default UseAxiosSequre;