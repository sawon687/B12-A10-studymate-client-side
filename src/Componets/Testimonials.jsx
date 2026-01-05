import { motion } from "framer-motion";

const Testimonials = () => {
  const cardVariants = {
    offscreen: { y: 60, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.25, duration: 0.9 },
    },
  };

  const testimonials = [
    {
      text: "StudyMate helped me find the perfect study partner for my programming course!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Aisha R.",
      role: "CSE Student",
    },
    {
      text: "The platform is super easy to use and I found people with similar goals instantly.",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
      name: "Tariq A.",
      role: "Web Learner",
    },
    {
      text: "I love the partner request feature. It keeps me consistent and motivated.",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Sara H.",
      role: "UI/UX Student",
    },
  ];

  return (
    <div className="relative max-w-[1370px] mx-auto  rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500 ">
      
    <section className=" max-w-[1370px] bg-white/10 shadow-lg gradient-border    backdrop-blur-2xl py-10 rounded-2xl mx-auto">
      <div className="text-center mb-14">
       <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute -top-25 -left-40 w-96 h-96 rounded-full bg-green-300 opacity-30 animate-pulse-slow"></div>
    <div className="absolute -bottom-20 -right-22 w-96 h-96 rounded-full bg-cyan-300 opacity-30 animate-pulse-slow delay-2000"></div>
  </div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
        >
          Loved by Learners
        </motion.h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Real feedback from students who grow together using StudyMate
        </p>
      </div>

      <div className="grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-2xl p-6  dark:bg-gray-900/70 
                       backdrop-blur-xl shadow-xl border border-gray-200 
                       dark:border-gray-800 transition-all"
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-600/10 blur-xl"></div>

            <div className="relative z-10">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                “{item.text}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-indigo-500"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {item.name}
                  </h4>
                  <span className="text-xs text-indigo-500">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Testimonials;
