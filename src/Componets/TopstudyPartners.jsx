import axios from 'axios';
import  { useEffect, useState } from 'react';
import ProfileCards from './ProfileCards';
import { motion } from "framer-motion";


const TopstudyPartners = () => {
    const [topProfile,setTopProfile]=useState([])

    useEffect(() => {
         axios('https://studymate-api-server-pi.vercel.app/topStudyProfile').then(res => {
             console.log(res.data);
             setTopProfile(res.data)
         });
    }, [])

    console.log(topProfile)
    return (
        <div className='w-[1500px] mx-auto flex  items-center flex-col justify-center'>
         <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-center  font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-12"
        >
          Top Study Partner
        </motion.h2>

        <div className='flex w-[1370px]  justify-center items-center  '>
           
        <div className=' grid w-full  lg:grid-cols-4 shadow-md rounded-2xl md:grid-cols-3  px-5 py-10 mx-auto bg-base-100   grid-cols-1  gap-3  '>
            {
                topProfile.map(data=><ProfileCards data={data} key={data._id} ></ProfileCards >)
            }
        </div>
        
        </div>
        </div>
    );
};

export default TopstudyPartners;
