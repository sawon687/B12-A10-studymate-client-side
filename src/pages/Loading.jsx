import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <FadeLoader
          height={20}     // bar height (default 15)
          width={6}       // bar width (default 5)
          radius={4}
          margin={6}
          speedMultiplier={1.2}
        />
      </div>
    </div>
  );
};

export default Loading;
