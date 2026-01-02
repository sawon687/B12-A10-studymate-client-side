import { motion } from "framer-motion";

const HowItWorks = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 }
    }
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-12"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🔍", title: "Find Partners", desc: "Search for study partners based on subjects, availability, and location." },
            { icon: "💬", title: "Send Requests", desc: "Send partner requests to connect and start studying together easily." },
            { icon: "📚", title: "Collaborate & Learn", desc: "Chat, schedule study sessions, and collaborate for better learning outcomes." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
