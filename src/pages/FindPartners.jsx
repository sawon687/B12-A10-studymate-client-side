import ProfileCards from '../Componets/ProfileCards';
import { FaSearch } from 'react-icons/fa';
import Loading from './Loading';
import AuthContex from '../Contex/AuthContex';
import { useContext, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import UseAxiosSequre from '../Hook/UseAxiosSequre';

const FindPartners = () => {
  const { loading } = useContext(AuthContex);
  const [Profile, setProfile] = useState([]);
  const [active, setActive] = useState("");
  const [titleText, SetTitleText] = useState("");
  const [searchText,setSearchText]=useState()
  const [exprience,setExperience]=useState()
  const [profileCount,setProfileCount]=useState()
   const axiosSequre=UseAxiosSequre()
   const [currentPage,setCurrentPage]=useState(0)
   
  // Typewriter effect
  const fullText = 'Welcome to StudyMate';
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      SetTitleText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);
const limit=8;
const TotalPage=profileCount/8
const skip=limit*Number(currentPage)
const page=Math.ceil(TotalPage)
console.log('skip',skip)
  // Fetch initial data
  useEffect(() => {
    axiosSequre(`/userProfile?limit=${limit}&search=${searchText|| ''}&skip=${skip}&experienceSort=${exprience||''}`)
      .then(res =>{ setProfile(res.data.result)
            setProfileCount(res.data.Totalcount)
      })
      .catch(err => console.log(err));
  }, [searchText,exprience,limit,currentPage]);

  console.log('profile',Profile)

  // Search function
  const handleSearchText= (e) => {
    e.preventDefault();
    const searchItem = e.target.searchitem.value;
    setSearchText(searchItem)
    // axiosSequre(`/userProfile?search=${searchItem}?experienceSort=${level}`)
    //   .then(res => setProfile(res.data))
    //   .catch(err => console.log(err));
  };

  // // Sort function
  // const handleSortByExperience = (level) => {
  //   setActive(level); // set active button
  //   axiosSequre(`/userProfile?experienceSort=${level}`)
  //     .then(res => setProfile(res.data))
  //     .catch(err => console.log(err));
  // };

  // // Default button
  // const handleDefault = () => {
  //   setActive("Default");
  //   axiosSequre("/userProfile")
  //     .then(res => setProfile(res.data))
  //     .catch(err => console.log(err));
  // };

  if (!loading) {
    return <Loading />;
  }

  return (
    <>
    <title>FindPartner</title>
  
    <div className='max-w-[1370px] mb-10 mt-16 mx-auto '>
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-10 mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {titleText}
        </h1>
        <h3 className="text-xl md:text-2xl mt-2 ">
          Find Your Perfect Study Partner
        </h3>
      </motion.div>

      {/* Sort Buttons & Search */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pb-10'>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className={`btn px-6 py-2 rounded-full ${active === "Beginner" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-base-100"}`}
            onClick={() => setExperience("Beginner")}
          >
            Beginner First
          </button>
          <button
            className={`btn px-6 py-2 rounded-full ${active === "Intermediate" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-base-100"}`}
            onClick={() => setExperience("Intermediate")}
          >
            Intermediate First
          </button>
          <button
            className={`btn px-6 py-2 rounded-full ${active === "Expert" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-base-100"}`}
            onClick={() => setExperience("Expert")}
          >
            Expert First
          </button>
          <button
            className={`btn px-6 py-2 rounded-full ${active === "Default" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-base-100"}`}
            onClick={()=> setActive('Defult')}
          >
            Default
          </button>
        </div>

        {/* Search */}
        <form onSubmit={handleSearchText} className='mt-4 md:mt-0'>
          <div className="relative flex items-center">
            <input
              type="search"
              name="searchitem"
              placeholder="Search"
              className="input w-[250px] md:w-[300px] rounded-l-full border border-gray-300 outline-none px-4 py-2"
            />
            <button
              type="submit"
              className="btn rounded-r-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>

      {/* Profile Cards */}
      <div>
           <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-12"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold  bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
        Explore All Profiles
      </h1>
      <p className="mt-4 text-gray-500 text-lg">
        Total Profiles Available: <span className="font-semibold text-indigo-600">{Profile.length}</span>
      </p>
    </motion.div>
      <div className="grid md:grid-cols-3 rounded-2xl shadow-md lg:grid-cols-4 w-full px-5 gap-5 py-10  bg-base-200 ">
        {Profile.length > 0 ? (
          Profile.map((data) => (
            <ProfileCards data={data} key={data._id} />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center min-h-[50vh]">
            <h1 className="text-center font-bold text-4xl text-gray-700">
              No Result Found
            </h1>
          </div>
        )} 
      </div>
      </div>

           <div className='my-7 gap-5 w-full flex justify-center items-center'>
            {
              currentPage > 0 && <button onClick={()=> setCurrentPage(currentPage - 1)} className='btn h-10 w-10 rounded-full shadow-md hover:btn-primary'>prev</button>
            }
           
                   {
                    

                    [...Array(page).keys()].map((i)=><button onClick={()=> setCurrentPage(i)} className={`${i==currentPage&& 'btn-primary'} btn shadow-md  rounded-full`}>{i+1}</button>)
                  }


                  {
                      page > currentPage + 1 && <button onClick={()=> setCurrentPage(currentPage + 1)} className='btn h-10 w-10 rounded-full shadow-md hover:btn-primary'>Next</button>
                  }
           </div>
    </div>
      </>
  );
};

export default FindPartners;
