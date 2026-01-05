import React, { useContext, useEffect, useState } from 'react';
import { FaUsers, FaBell, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import UseAxiosSequre from '../Hook/UseAxiosSequre';
import AuthContex from '../Contex/AuthContex';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analaysis = () => {
  const axiosSecure = UseAxiosSequre();
  const { user } = useContext(AuthContex);

  const [stats, setStats] = useState({ totalConnections: 0, newRequests: 0, achievements: 0 });
  const [connections, setConnections] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userEmail = user?.email;

        const connectionsRes = await axiosSecure.get(`/myConnection?email=${userEmail}`);
        const connectionsData = Array.isArray(connectionsRes?.data) ? connectionsRes.data : [];
        const totalConnections = connectionsData.length;
        const newRequests = connectionsData.filter(c => !c.accepted).length;

        const profilesRes = await axiosSecure.get(`/userProfile?search=${userEmail}`);
        const profilesData = Array.isArray(profilesRes?.data?.result) ? profilesRes.data.result : [];
        const achievements = profilesData.filter(p => Number(p.rating) >= 4).length;

        setStats({ totalConnections, newRequests, achievements });
        setConnections(connectionsData);
        setProfiles(profilesData);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [axiosSecure, user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-500 text-lg animate-pulse">Loading Dashboard...</p>
      </div>
    );
  }

  const cards = [
    { title: "Total Connections", value: stats.totalConnections, sub: "Active", icon: <FaUsers size={22} />, gradient: "from-green-400 via-cyan-400 to-blue-500" },
    { title: "New Requests", value: stats.newRequests, sub: "Pending", icon: <FaBell size={22} />, gradient: "from-indigo-500 to-purple-600" },
    { title: "Achievements", value: stats.achievements, sub: "Badges", icon: <FaAward size={22} />, gradient: "from-yellow-400 via-orange-400 to-red-500" },
  ];

  // Rounded Pie Chart Data
  const pieData = {
    labels: ["Active Connections", "Pending Requests", "Achievements"],
    datasets: [
      {
        data: [stats.totalConnections, stats.newRequests, stats.achievements],
        backgroundColor: ["rgba(34,197,94,0.8)", "rgba(99,102,241,0.8)", "rgba(250,204,21,0.8)"],
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 2,
        hoverOffset: 20,
        borderRadius: 20, // Makes the pie chart rounded on edges
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { padding: 20, boxWidth: 20, font: { size: 14 } } },
      tooltip: { backgroundColor: '#111', titleColor: '#fff', bodyColor: '#fff' },
      title: { display: true, text: "Distribution Overview", font: { size: 20 } },
    },
  };

  // Bar chart
  const barData = {
    labels: cards.map(c => c.title),
    datasets: [{ label: "Count", data: cards.map(c => c.value), backgroundColor: ["rgba(34,197,94,0.6)", "rgba(99,102,241,0.6)", "rgba(250,204,21,0.6)"], borderRadius: 6, hoverBackgroundColor: ["rgba(34,197,94,0.9)", "rgba(99,102,241,0.9)", "rgba(250,204,21,0.9)"] }],
  };

  const barOptions = { responsive: true, plugins: { legend: { display: false }, tooltip: { backgroundColor: '#111', titleColor: '#fff', bodyColor: '#fff' } }, scales: { x: { grid: { display: false } }, y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: '#e5e7eb' } } } };

  // Line chart
  const lineData = {
    labels: connections.map((_, i) => `Conn ${i + 1}`),
    datasets: [
      { label: "Connection Status", data: connections.map(c => (c.accepted ? 1 : 0)), fill: true, backgroundColor: "rgba(34,197,94,0.2)", borderColor: "rgba(34,197,94,1)", tension: 0.4, pointRadius: 4, borderWidth: 2 },
      { label: "Profile Ratings", data: profiles.map(p => Number(p.rating)), fill: false, borderColor: "rgba(99,102,241,1)", tension: 0.4, pointRadius: 4, borderWidth: 2 },
    ],
  };

  const lineOptions = { responsive: true, plugins: { legend: { display: true, position: 'top' }, tooltip: { backgroundColor: '#111', titleColor: '#fff', bodyColor: '#fff' } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } }, x: { grid: { display: false } } } };

  return (
    <div className="space-y-10">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className={`relative rounded-2xl p-6 text-white bg-gradient-to-r ${card.gradient} shadow-xl overflow-hidden`}>
            <div className="absolute inset-0 bg-white/10 blur-2xl"></div>
            <div className="relative z-10 flex justify-between items-center">
              <div>
                <h3 className="text-sm uppercase tracking-wide opacity-90">{card.title}</h3>
                <p className="text-4xl font-extrabold mt-2">{card.value}</p>
                <span className="text-sm opacity-90">{card.sub}</span>
              </div>
              <div className="p-4 bg-white/20 rounded-xl backdrop-blur-md">{card.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-base-100 rounded-2xl shadow p-6 h-[350px] border border-gray-200"><Bar data={barData} options={barOptions} /></div>
        <div className="bg-base-100 rounded-2xl shadow p-6 h-[350px] border border-gray-200"><Line data={lineData} options={lineOptions} /></div>
        <div className="bg-base-100 rounded-2xl shadow p-6 h-[350px] border border-gray-200"><Pie data={pieData} options={pieOptions} /></div>
      </div>

   
    </div>
  );
};

export default Analaysis;
