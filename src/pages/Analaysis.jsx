import React from 'react';

const Analaysis = () => {
    const cards = [
        {
          title: "Total Connections",
          value: "12",
          sub: "Active",
          icon: <FaUsers size={22} />,
          gradient: "from-green-400 via-cyan-400 to-blue-500",
        },
        {
          title: "New Requests",
          value: "3",
          sub: "Pending",
          icon: <FaBell size={22} />,
          gradient: "from-indigo-500 to-purple-600",
        },
        {
          title: "Achievements",
          value: "5",
          sub: "Badges",
          icon: <FaAward size={22} />,
          gradient: "from-green-400 via-cyan-400 to-blue-500",
        },
      ];
    return (
        <div>
            
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className={`relative rounded-2xl p-6 text-white bg-gradient-to-r ${card.gradient} shadow-xl overflow-hidden`}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-white/10 blur-2xl"></div>

          <div className="relative z-10 flex justify-between items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wide opacity-90">
                {card.title}
              </h3>
              <p className="text-4xl font-extrabold mt-2">
                {card.value}
              </p>
              <span className="text-sm opacity-90">{card.sub}</span>
            </div>
            <div className="p-4 bg-white/20 rounded-xl backdrop-blur-md">
              {card.icon}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
        </div>
    );
};

export default Analaysis;