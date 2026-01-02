import { motion } from "framer-motion";

const Testimonials = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 }
    }
  };

  const testimonials = [
    {
      text: "“StudyMate helped me find the perfect study partner for my programming course!”",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Aisha R."
    },
    {
      text: "“The platform is super easy to use and find people with similar learning goals.”",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
      name: "Tariq A."
    },
    {
      text: "“I love the study partner request feature, it really keeps me motivated!”",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Sara H."
    }
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-center mt-10 font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-12"
        >
          What Our Users Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-base-100 rounded-xl shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <p className="mb-4">{item.text}</p>
              <div className="flex items-center justify-center gap-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full" />
                <span className="font-semibold">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
