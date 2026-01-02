import React from 'react';
import { BlinkBlur } from 'react-loading-indicators';


const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        
        {/* Loading Text */}
        <h1 className="text-5xl text-center mb-2 text-5xl font-semibold animate-pulse">
          Loading...
        </h1>

      

<div className="flex flex-col gap-4 ">
  <div className="flex flex-col items-center gap-4 justify-center">
 
    <div ><BlinkBlur color="#6227d5" size="medium" text="" textColor="" /> <BlinkBlur color="#6227d5" size="medium" text="" textColor="" /></div>
    <div ><BlinkBlur color="#6227d5" size="medium" text="" textColor="" /> <BlinkBlur color="#6227d5" size="medium" text="" textColor="" /></div>
    
    
  </div>
</div>

      </div>
    </div>
  );
};

export default Loading;
