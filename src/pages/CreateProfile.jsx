import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import AuthContex from '../Contex/AuthContex';

const CreateProfile = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [study,setStudy]=useState('')
  const [exprement,setExprement]=useState('')
  const {user}=useContext(AuthContex)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating);
    const  UserName=e.target.name.value;
    const  Email=e.target.email.value;

    const  PhotoURL=e.target.photoURL.value;
    const  AvailabalTime=e.target.availabilityTime.value;
    const  Parnercount=e.target.partnercount.value;
   console.log(UserName,Email,PhotoURL,AvailabalTime,Parnercount,study,exprement)

  };

  const handleStudyMode=(e)=>{
    e.preventDefault()
      setStudy(e.target.value)
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
          <input type="text" className="input w-full" required placeholder="City, area, or preferred location."  name='password' />
       
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