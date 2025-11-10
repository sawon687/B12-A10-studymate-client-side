import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ProfileCards = ({data}) => {
          const {profileimage, name,subject,rating}=data
    return (
        <div>
             
                    <div className="card  z-40 bg-base-100 w-96 shadow-sm">
  <figure className='bg-gray-300  py-10'>
    <img className=' rounded-full'
      src={profileimage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">
      {name}
      
    </h2>
   
    <div className="card-actions justify-between">
      <div className="text-xl font-semibold ">{subject}</div>
      <div className="badge ">{rating}<FaStar/></div>
    </div>

    <Link to={`/PartnerDetails/${data._id}`} className='btn w-full bg-[#2563EB] text-white'>View Profile</Link>
  </div>
</div> 
        
        </div>
    );
};

export default ProfileCards;