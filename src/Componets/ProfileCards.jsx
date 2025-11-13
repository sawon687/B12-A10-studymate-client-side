
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';


const ProfileCards = ({data}) => {
          const {_id,profileimage, name,subject,rating}=data
          console.log(_id)
    return (
        <div className="flex justify-center">
             
       <div className="group relative   border border-blue-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-80 sm:w-96 overflow-hidden">
     
        {/* Profile Image */}
        <div className="flex flex-col items-center py-8 ">
          <div className="w-28 h-28 rounded-full border-4 border-blue-500 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
            <img
              src={profileimage}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
  <div className="card-body">
    {/* Card Body */}
        <div className="px-6 pb-6 text-center">
          <h2 className="text-2xl font-semibold  mb-1">{name}</h2>
          <p className="text-blue-600 font-medium mb-3">{subject}</p>

          {/* Rating */}
          <div className="flex justify-center items-center gap-1 mb-5">
            <span className="text-yellow-500 text-lg flex items-center gap-1">
              {rating?.toFixed(1) || rating}
              <FaStar />
            </span>
          </div>
          </div>

 {/* View Profile Button */}
          <Link
            to={`/PartnerDetails/${_id}`}
            className="inline-block w-full text-center py-2.5 rounded-xl font-semibold bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            View Profile
          </Link>

        </div>
  </div>
</div> 
        
       
    );
};

export default ProfileCards;