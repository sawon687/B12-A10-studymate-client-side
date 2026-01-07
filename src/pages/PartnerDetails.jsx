import { useContext, useEffect, useState } from "react";
import AuthContex from "../Contex/AuthContex";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import UseAxiosSequre from "../Hook/UseAxiosSequre";

// Slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerDetails = () => {
  const { user } = useContext(AuthContex);
  const [partner, setPartner] = useState({});
  const [refresh, setRefresh] = useState(false);
  const axiosSequre = UseAxiosSequre();
  const { id } = useParams();

  // Slider refs
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    axiosSequre.get(`/partner/${id}`).then((res) => {
      setPartner(res.data);
    });
  }, [id, refresh]);

  const handleRequest = () => {
  
  
    axiosSequre
      .post("/myConnection", {
        
       name: partner.name,
        profileImages: partner.profileImages[0],
        studyMode: partner.studyMode,

        availabilityTime: partner.availabilityTime,
        location: partner.location,
        experienceLevel: partner.experienceLevel,
        rating: partner.rating,
        patnerCount: partner.patnerCount,
        email: partner.email,
        partnerId: partner._id,
        request_Email:user.email

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
      .catch((error) => console.log(error?.response?.data?.message));
  };

  // ✅ Slider images fallback
  const images =
    partner?.profileImages && partner.profileImages.length > 0
      ? partner.profileImages
      : partner?.profileImages
        ? [partner?.profileImages]
        : [];

  const mainSettings = {
    asNavFor: nav2,
    arrows: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const thumbSettings = {
    asNavFor: nav1,
    slidesToShow: Math.min(images.length, 4),
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-25">
      <title>PartnerDetails</title>
      <div className="max-w-4xl w-full p-8 backdrop-blur-xl dark:bg-gray-800/70 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Slider Section */}
          <div className="w-40 md:w-64">
            <Slider {...mainSettings} ref={(slider) => setNav1(slider)}>
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`${partner?.name}-${index}`}
                    className="w-full h-40 md:h-64 object-cover rounded-xl border-4 border-indigo-500 shadow-md"
                  />
                </div>
              ))}
            </Slider>

            <div className="mt-4">
              <Slider {...thumbSettings} ref={(slider) => setNav2(slider)}>
                {images.map((img, idx) => (
                  <div key={idx} className="px-1">
                    <img
                      src={img}
                      alt={`thumb-${idx}`}
                      className="w-20 h-20 object-cover rounded-lg border-2 border-indigo-500 cursor-pointer"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-3">
              {partner?.name}
            </h1>
            <div className="space-y-2 text-gray-700 dark:text-gray-200">
              <p>
                <span className="font-semibold">Subject:</span> {partner?.subject}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {partner?.email}
              </p>
              <p>
                <span className="font-semibold">Study Mode:</span> {partner?.studyMode}
              </p>
              <p>
                <span className="font-semibold">Availability:</span> {partner?.availabilityTime}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {partner?.location}
              </p>
              <p>
                <span className="font-semibold">Experience Level:</span> {partner?.experienceLevel}
              </p>
              <p>
                <span className="font-semibold">Rating:</span> {partner?.rating} ⭐
              </p>
              <p>
                <span className="font-semibold">Partner Count:</span> {partner?.patnerCount}
              </p>
            </div>

            <button
              onClick={handleRequest}
              className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-indigo-300/40 dark:hover:shadow-purple-800/40 transition-all duration-300"
            >
              Send Partner Request
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 p-5 rounded-xl bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            About {partner?.name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {partner?.name} is an experienced {partner?.subject} study partner who prefers{" "}
            {partner?.studyMode} sessions. Available during {partner?.availabilityTime} in{" "}
            {partner?.location}. Ideal for students seeking collaborative learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
