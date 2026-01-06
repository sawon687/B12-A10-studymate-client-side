import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AuthContex from "../Contex/AuthContex";
import ContactSkeleton from "../Componets/ContactSkeleton;";

const Contact = () => {
  const {loading}=useContext(AuthContex)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message has been sent!`);
    setFormData({ name: "", email: "", message: "" });
  };

  if(loading)
  {
     return <ContactSkeleton></ContactSkeleton>
  }

  return (
    <section className="py-25  transition-colors">
      <div className="max-w-[1200px] mx-auto px-5 transition-colors  flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl pb-4 font-extrabold text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6"
        >
          Contact Us
        </motion.h1>
        <p className="text-center  ext-lg md:text-xl mb-16 max-w-2xl">
          We’d love to hear from you! Whether you have a question about our products,
          features, or anything else, our team is ready to answer all your questions.
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 w-full mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-base-100 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-3"
          >
            <FaMapMarkerAlt className="text-indigo-500 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Address</h3>
            <p className="">123 SuduDay Street, Dhaka, Bangladesh</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-base-100 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-3"
          >
            <FaPhoneAlt className="text-indigo-500 text-3xl" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="">+880 1234 567 890</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-base-100 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-3"
          >
            <FaEnvelope className="text-indigo-500 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Email</h3>
            <p className="">support@sududaymate.com</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="w-full md:w-2/3 light bg-base-100/10 transition-colors p-10 rounded-2xl shadow-lg shadow-green-600 flex flex-col gap-6"
        >
         <div className="    bg-linear-to-r  from-green-400 via-cyan-400 to-blue-500 p-[3px] rounded-lg">
           <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input animate-border-move w-full outline-none rounded-lg  p-3 bg-base-300  "
          />
         </div>
         <div className="bg-linear-to-r from-green-400 via-cyan-400 to-blue-500 p-[3px] rounded-lg">
           <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input w-full rounded-lg  p-3 bg-base-300  "
          />
         </div>
          <div className="bg-linear-to-r from-green-400 via-cyan-400 to-blue-500 p-[3px] rounded-lg">
            <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="textarea w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 resize-none"
          ></textarea>
          </div>
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:scale-105 hover:shadow-lg transition-transform self-start"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
