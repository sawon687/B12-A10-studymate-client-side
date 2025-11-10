import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import AuthContex from '../Contex/AuthContex';
import axios from 'axios';

const CreateProfile = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [studyMode,setStudyMode]=useState('')
  const [experienceLevel,setExprement]=useState('')
  const [subject,setSubject]=useState('')
  const {user}=useContext(AuthContex)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating);
    const  name=e.target.name.value;
    const  Email=e.target.email.value;

    const  profileimage=e.target.photoURL.value;
    const  availabilityTime=e.target.availabilityTime.value;
    const  patnerCount=e.target.partnercount.value;
    const location=e.target.location.value
   console.log(name,Email,
availabilityTime,patnerCount,studyMode, profileimage, experienceLevel,location,rating,subject)
   const profileCreate={
     name,
    profileimage,
    subject,
    studyMode,
     availabilityTime,
      location,
     experienceLevel,
     rating,
     patnerCount,
       Email, 

   }
      
     axios.post('http://localhost:9000/createProfile',profileCreate)
     .then(res=> console.log(res.data))
  };

  const handleStudyMode=(e)=>{
    e.preventDefault()
      setStudyMode(e.target.value)
  }
  return (
    <div>
       <div className="hero bg-base-200  mx-auto  min-h-screen">
  
    <div className="card bg-base-100 max-w-[600px] w-full shrink-0 shadow-2xl">
      <div className="card-body  ">
       <form onSubmit={handleSubmit}>
         <fieldset className="fieldset w-full " >
            <h1 className='text-2xl font-bold text-center'>Create Your Account! Register</h1>
            <h3 className='text-center text-sm text-gray-600'>Join StudyMate and start learning with the right partner.</h3>
          <div className='flex gap-10 justify-center'>
            {/* name */}
            <div className='w-full'>
                <label className="label">Name</label>
          <input type="text" className="input w-full " required defaultValue={user?.displayName} placeholder="User Name" name='name' />
            </div>
                <div className='w-full'>
                        {/* Email */}
            <label className="label">Email</label>
          <input type="Email" className="input  w-full" required placeholder="Email" readOnly defaultValue={user?.email} name='email' />
                </div>
          </div>

            {/* Photo URL */}
          <label className="label">Photo URL</label>
          <input type="text" className="input  w-full" require placeholder="photoURL" defaultValue={user?.photoURL} name='photoURL'  />
               <div>
                <label className="label">Study Mode</label>
             <div  className='flex gap-5'>
           
              <button onClick={handleStudyMode} value='Online' className='btn flex-2'>Online</button>
              <button  onClick={handleStudyMode} value='Offline' className='btn flex-2'>Offline</button>
             </div>
               </div>
               
                  <div className='flex gap-5'>
                    {/* Availability Time */}
                         <div>
                            <label className="label">
                            Availability Time
                                </label>
                    <input 
                         type="text" 
                        name="availabilityTime"
                    placeholder="Evening 6–9 PM" 
                      className="input input-bordered w-full"/>
                         </div>
                    <div>
                      {/* Partner Count */}
                       <label className="label">Partner Count</label>
                        <input type="text" className="input" placeholder="Number of study partners connected" defaultValue={0} name='partnercount' />
                    </div>
                    </div>
             
                
                <div>
                <label className="label">Experience Level</label>
             <div className='flex gap-5'>
           
              <button type='button' onClick={()=>setExprement('Beginner')}  className='btn flex-2'>Beginner</button>
              <button type='button' onClick={()=>setExprement('Intermediate')} className='btn flex-2'>Intermediate</button>
              <button type='button' onClick={()=>setExprement('Expert')}  className='btn flex-2'>Expert</button>
             </div>
              </div>
              <label className='label'>Rating</label>
           <div className="flex gap-1 py-2">

      {[1, 2, 3, 4, 5].map((value) => (
        <FaStar
        required
          key={value}
          size={30}
          className="cursor-pointer transition-all"
          onClick={() => setRating(value)}
          onMouseEnter={() => setHover(value)}
          onMouseLeave={() => setHover(null)}
          color={value <= (hover || rating) ? "#facc15" : "#d1d5db"} 
        />
      ))}
    </div>
          
         
              {/* Location */}
          <label className="label">Location</label>
          <input type="text" className="input w-full" required placeholder="City, area, or preferred location."  name='location' />
           <label className="label">Subject</label>
          
  <label for="Subject" class="block mb-2 font-medium text-gray-700">Subject</label>
       <select onChange={(e)=>setSubject(e.target.value)} name="subject" class="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
           <option value="Online">Bangle</option>
        <option value="Math">Math</option>
        <option value="Programming">Programming</option>
        <option value="History">History</option>
        <option value="Accounting">Accounting</option>
        <option value="Chemistry">Chemistry</option>
        <option value="English">English</option>

           </select>

  
       
          <button type='submit' className="btn btn-neutral mt-4">submit</button>
             
        
  
        </fieldset>
       </form>
      </div>
    </div>
  </div>
    </div>
  );
};

export default CreateProfile;