import axios from 'axios';
import  { useEffect, useState } from 'react';
import ProfileCards from './ProfileCards';



const TopstudyPartners = () => {
    const [topProfile,setTopProfile]=useState([])

    useEffect(() => {
         axios('http://localhost:9000/topStudyProfile').then(res => {
             console.log(res.data);
             setTopProfile(res.data)
         });
    }, [])

    console.log(topProfile)
    return (
        <div className='flex justify-center py-10 '>
        <div className='grid grid-cols-3   gap-10  '>
            {
                topProfile.map(data=><ProfileCards data={data} key={data._id} ></ProfileCards >)
            }
        </div>
        
        </div>
    );
};

export default TopstudyPartners;
