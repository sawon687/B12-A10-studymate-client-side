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
        <div className='flex flex-col justify-center'>
         <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-center mt-10 font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-12"
        >
          Top Study Partner
        </motion.h2>

        <div className='flex justify-center py-10 '>
           
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10  '>
            {
                topProfile.map(data=><ProfileCards data={data} key={data._id} ></ProfileCards >)
            }
        </div>
        
        </div>
        </div>
    );
};

export default TopstudyPartners;
