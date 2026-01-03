import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import { motion } from "framer-motion";
import Fastar from './Fastar';
const ProfileCards = ({ data }) => {
  const { _id, profileimage, name, subject, rating } = data;
   
  console.log(rating)
  return (
     <motion.div 
              key={_id}
              className="relative  bg-base-100  rounded-lg shadow overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-600 rounded-t">
                <img src={profileimage} className='w-full h-full bg-center' alt="" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 bg-base-100 ">{name}</h3>
                <p className="text-sm bg-base-200 mb-2">{subject}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-400 flex">
                  
                     <Fastar rating={rating}></Fastar>
                  </span>
                  <button className="btn btn-sm btn-primary">View</button>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-80 flex items-center justify-center text-white text-xl font-bold transition-opacity duration-300"
                whileHover={{ opacity: 0.8 }}
              >
                Click to Explore
              </motion.div>
            </motion.div>
  );
};

export default ProfileCards;
