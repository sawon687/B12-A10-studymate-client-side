import React, { useContext } from 'react';
import AuthContex from '../Contex/AuthContex';

const Profile = () => {
    const {user}=useContext(AuthContex)
    console.log(user)
    return (
        <div className='flex  justify-center items-center min-h-screen'>
             <div className='w-80 h-70 flex flex-col justify-center items-center card rounded-2xl shadow-sm'>
                 <figure><img className='w-14 h-14 rounded-full ' src={user?.photoURL} alt="" /></figure>
                 <h1>{user?.displayName}</h1>
                 <h3>{user?.email}</h3>
             </div>
        </div>
    );
};

export default Profile;