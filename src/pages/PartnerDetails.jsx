import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContex from "../Contex/AuthContex";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const PartnerDetails = () => {
  const { user } = useContext(AuthContex);
  const [partner, setPartner] = useState({});
  const [refresh, setRefresh] = useState(false);
  const { id } = useParams();
        console.log(partner)
  const { _id, ...restPartnerData } = partner;

  useEffect(() => {
    axios(`https://studymate-api-server-pi.vercel.app/partner/${id}`).then((res) => {
      setPartner(res.data);
    });
  }, [id, refresh]);

  const handleRequest = () => {
    axios
      .post("https://studymate-api-server-pi.vercel.app/myConnection", {
        ...restPartnerData,
        request_Email: user?.email,
        partnerId: partner._id,
      })
      .then((res) => {
         setRefresh(!refresh);
        Swal.fire({
          title: `${res.data.message}`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
       
      })
      .catch((error) => console.log(error.data.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10  dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-500">
       <title>PartnerDetails</title>
      <div className="max-w-4xl w-full p-8 backdrop-blur-xl  dark:bg-gray-800/70 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <img
            src={partner?.profileimage}
            alt={partner?.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />

          {/* Info Section */}
          <div className="flex-1 ">
            <h1 className="text-3xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-3">
              {partner?.name}
            </h1>
            <div className="space-y-2 text-gray-700 dark:text-gray-200">
              <p>
                <span className="font-semibold ">Subject:</span>{" "}
                {partner?.subject}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {partner?.email}
              </p>
              <p>
                <span className="font-semibold">Study Mode:</span>{" "}
                {partner?.studyMode}
              </p>
              <p>
                <span className="font-semibold">Availability:</span>{" "}
                {partner?.availabilityTime}
              </p>
              <p>
                <span className="font-semibold">Location:</span>{" "}
                {partner?.location}
              </p>
              <p>
                <span className="font-semibold">Experience Level:</span>{" "}
                {partner?.experienceLevel}
              </p>
              <p>
                <span className="font-semibold">Rating:</span> {partner?.rating} ⭐
              </p>
              <p>
                <span className="font-semibold">Partner Count:</span>{" "}
                {partner?.patnerCount}
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={handleRequest}
              className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-indigo-300/40 dark:hover:shadow-purple-800/40 transition-all duration-300"
            >
              Send Partner Request
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8 p-5 rounded-xl bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            About {partner?.name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {partner?.name} is an experienced {partner?.subject} study partner
            who prefers {partner?.studyMode} sessions. Available during{" "}
            {partner?.availabilityTime} in {partner?.location}. Ideal for
            students seeking collaborative learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
