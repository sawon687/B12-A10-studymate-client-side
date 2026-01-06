import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  const slides = [
    {
      title: "Find Your Perfect Study Partner",
      desc: "Connect with students who share your subjects, learning style, and academic goals. Study smarter together and achieve better results!",
      img: "https://i.postimg.cc/nzLc0f9Z/parents-with-baby-looking-laptop-screen.jpg",
      btn: "Find Partners",
    },
    {
      title: "Learn Collaboratively, Grow Faster",
      desc: "Join a learning community where collaboration and motivation go hand in hand. Make studying fun, focused, and engaging!",
      img: "https://i.postimg.cc/4yKqxBqz/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg",
      btn: "Join Now",
    },
    {
      title: "Track Progress & Achieve Goals",
      desc: "Stay consistent and achieve your study milestones. Build habits, track performance, and reach your academic dreams with StudyMate.",
      img: "https://i.postimg.cc/Y2nt2PGY/8520527.jpg",
      btn: "Start Learning",
    },
  ];

  return (
    <div className="relative top-15   max-w-[1370px] hover:shadow-lg shadow-emerald-400 hover:scale-[10px] bg-linear-to-r  from-green-400 via-cyan-400 to-blue-500 p-[1px]  rounded-2xl mt-10  mx-auto    backdrop-blur-3xl">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={true}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2000,       // 4 seconds per slide
          disableOnInteraction: false, // keep autoplay even after user interaction
          pauseOnMouseEnter: false,   // don't pause on hover
          Autoplay:true,
        }}
        speed={1000} // smooth transition duration
        className="h-[500px]  rounded-2xl"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[500px] bg-cover bg-center flex items-center justify-center text-white relative"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-2xl px-6"
              >
               <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              {s.title}
       </h2>

                <p className="mb-6 text-lg md:text-xl">{s.desc}</p>
                <Link to='/FindPartners' className="btn outline-none border-none h-12 bg-gradient-to-br  from-indigo-500 to-purple-600 hover:bg-blue-700 text-white px-8  rounded-lg font-semibold transition duration-300">
                  {s.btn} <FaArrowRightLong />
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
