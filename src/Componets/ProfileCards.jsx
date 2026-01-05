

import { motion } from "framer-motion";

import { Link } from "react-router";
import Fastar from "./Fastar";

const ProfileCards = ({ data }) => {
  const { _id, profileimage, name, subject, rating } = data || {};
   
  console.log('id',_id)
  return (
    <div>
     <motion.div 
              key={_id}
              className="relative  bg-base-300  rounded-lg shadow overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48  rounded-t">
                <img src={profileimage} className='w-full h-full bg-center' alt="" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 ">{name}</h3>
                <p className="text-sm  mb-2">{subject}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-400 flex">
                  
                     <Fastar rating={rating}></Fastar>
                  </span>
                  <Link to={`/PartnerDetails/${_id}`} className="btn btn-sm text-white  bg-gradient-to-br from-indigo-500 to-purple-600 flex">View</Link>
                </div>
              </div>
             
            </motion.div>
             
            </div>
  );
};

export default ProfileCards;
