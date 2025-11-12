import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='bg-[#f0f0f0] space-y-5 flex-col flex justify-center items-center min-h-screen'>
            <title>Not Found</title>
            <div className='w-[25rem] h-[25rem] border-[2rem] border-red-500  rounded-full'>
                <h1 className='font-bold  text-red-500 text-[20rem] -mt-30 text-center'>!</h1>
                
            </div>
            <p className='text-red-500 font-bold text-5xl'>404 Not Found</p>
            <Link to='/' className='btn bg-gray-600 px-17 py-5'>Go Back</Link>
        </div>
    );
};

export default NotFound;