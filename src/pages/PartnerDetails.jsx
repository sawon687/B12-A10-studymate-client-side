import axios from 'axios';
import React, { useContext, useState, } from 'react';
import { useLoaderData } from 'react-router';
import AuthContex from '../Contex/AuthContex';

const PartnerDetails = () => {
  const {user}=useContext(AuthContex)
 console.log(user)
    const userdetails=useLoaderData()
    console.log(userdetails)
    const partner=userdetails.data
    const {_id,...restPartnerData}=partner
    console.log(partner)
         const [partnerCount,setPartnerCount]=useState(partner?.patnerCount)
     
    const handleRequest=()=>{
      axios.post('http://localhost:9000/myConnection',{...restPartnerData,request_Email:user?.email
,partnerId:partner._id})
      .then(res=>{console.log(res.data)
         
           if(res.data.success)
           {
            setPartnerCount(prev=> prev+1)
            alert(res.data.message)
           }
           else{
                
                  alert(res.data.message)
           }
           

      }).catch(error=> console.log(error.data.message))
    }
    return (
        <div>
 <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image */}
        <img
          src={partner?.profileimage}
          alt={partner?.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
        />

        {/* Info Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{partner?.name}</h1>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Subject:</span> {partner?.subject}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Email:</span> {partner?.email}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Study Mode:</span> {partner?.studyMode}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Availability:</span> {partner?.availabilityTime}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Location:</span> {partner?.location}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Experience Level:</span> {partner?.experienceLevel}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Rating:</span> {partner?.rating} ⭐</p>
          <p className="text-gray-600 mb-4"><span className="font-semibold">PartnerCount:</span> {partnerCount}</p>

          {/* Action Button */}
          <button onClick={handleRequest}  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Send Partner Request
          </button>
        </div>
      </div>

      {/* Optional Description or Notes */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-2">About {partner?.name}</h2>
        <p className="text-gray-700">
          {partner?.name} is an experienced {partner?.subject} study partner? who prefers {partner?.studyMode} sessions. 
          Available during {partner?.availabilityTime} in {partner?.location}. Ideal for students seeking collaborative learning.
        </p>
      </div>
    </div>
        </div>
    );
};

export default PartnerDetails;