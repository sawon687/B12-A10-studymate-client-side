import axios from "axios";
import { useEffect, useState } from "react";
import ProfileCards from "./ProfileCards";
import { motion } from "framer-motion";
import UseAxiosSequre from "../Hook/UseAxiosSequre";

const TopStudyPartners = () => {
  const [topProfile, setTopProfile] = useState([]);
  const axiosSecure = UseAxiosSequre();

  useEffect(() => {
    axiosSecure.get("/topStudyProfile").then((res) => {
      setTopProfile(res.data);
    });
  }, []);

  return (
    <section className=" transition-colors">
      <div className=" py-10  duration-500 bg-base-200 rounded-2xl mx-auto px-5 flex flex-col items-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12"
        >
          Top Study Partners
        </motion.h2>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {topProfile.map((data) => (
            <motion.div
              key={data._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="rounded-2xl border border-base-300 shadow-lg hover:shadow-xl transition-all"
            >
              {/* DaisyUI card style */}
              <div className="card bg-base-100 shadow-md p-4 rounded-2xl">
                <ProfileCards data={data} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStudyPartners;
