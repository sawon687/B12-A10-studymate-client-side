import axios from 'axios';
import { useEffect, useState } from 'react';
import ProfileCards from '../Componets/ProfileCards';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const FindPartners = () => {
  const [Profile, setProfile] = useState([]);
 

  useEffect(() => {
    axios('http://localhost:9000/userProfile').then(res => {
      console.log(res.data);
      setProfile(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchItem = e.target.searchitem.value;
    axios(`http://localhost:9000/search?search=${searchItem}`).then(res => {
      console.log(res.data);
      setProfile(res.data);
    });
  };

 const handleSortByExperience = (level) => {
  axios(`http://localhost:9000/userProfile?experienceSort=${level}`)
    .then(res => setProfile(res.data))
    .catch(err => console.log(err));
};


  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex  pt-20  justify-between items-center'>
        <div className="dropdown z-100">

      
  <button className="btn" onClick={() => handleSortByExperience("Beginner")}>
    Beginner First
  </button>
  <button className="btn" onClick={() => handleSortByExperience("Intermediate")}>
    Intermediate First
  </button>
  <button className="btn" onClick={() => handleSortByExperience("Expert")}>
    Expart First
  </button>
  <button className="btn" onClick={() => {
    // Default DB order
    axios("http://localhost:9000/userProfile")
      .then(res => setProfile(res.data))
  }}>
    Default
  </button>
 
    </div>
        <form onSubmit={handleSearch} >
          <div className="relative flex justify-center items-center ">
            <input
              type="search"
              className="input rounded-r-none w-[300px] rounded-l-3xl outline-2 border-none outline-[#2563EB]"
              placeholder="Search"
              name="searchitem"
            />
            <button
              type="submit"
              className="btn px-10 py-[22px] rounded-r-3xl bg-[#2563EB]"
            >
              <FaSearch className="text-white absolute" />
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center pt-16 z-20 items-center py-10">
        {Profile.length > 0 ? (
          <div className="grid grid-cols-3 gap-10">
            {Profile.map((data) => (
              <ProfileCards data={data} key={data._id}></ProfileCards>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[50vh]">
            <h1 className="text-center font-bold text-4xl text-gray-700">
              No Result Found
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindPartners;
