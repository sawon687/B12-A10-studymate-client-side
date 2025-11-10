import axios from 'axios';
import { useEffect, useState } from 'react';

import ProfileCards from '../Componets/ProfileCards';
import { FaSearch } from 'react-icons/fa';
const FindPartners = () => {
     const [Profile,setProfile]=useState([])
     const [finditem,setFinditem]=useState('')
    
     const [userProfile,setUserProfile]=useState([])
        useEffect(() => {
         axios('http://localhost:9000/userProfile').then(res => {
             console.log(res.data);
             setProfile(res.data)
         });
    }, [])
    const search=finditem.trim().toLocaleLowerCase()
    console.log(search)
   
   const handleSearch=(e)=>{
     e.preventDefault()
     const searchItem=e.target.searchitem.value;
     console.log(searchItem)
     setFinditem(searchItem)
   }

    useEffect(()=>{
          if(search)
          {
              const searchProfile=Profile.filter(data=> data.subject.toLocaleLowerCase().includes(search))
              setUserProfile(searchProfile)
          }
          else{
             setUserProfile(Profile)
          }
      
    },[Profile,search])
     
    return (
        <>
         <div className='z-30'>
         <form onSubmit={handleSearch}>
           <div className=' relative flex justify-center items-center pt-20'>
          
            
                <input type="search"  className="input rounded-r-none rounded-l-3xl outline-2 border-none outline-[#2563EB] " placeholder="Search"  name='searchitem' />
             <button type='submit' className='btn px-10 py-[22px]  rounded-r-3xl bg-[#2563EB] '><FaSearch className=' text-white absolute'></FaSearch></button>
            
           </div>
             </form>
             </div>
        <div className='flex justify-center z-40   py-10 '>

    
        <div  className='grid grid-cols-3  z-40  gap-10  '>
            {
                userProfile.map(data=><ProfileCards data={data} key={data._id}></ProfileCards>)
            }
        </div>
        </div>
         </>
    );
};

export default FindPartners;