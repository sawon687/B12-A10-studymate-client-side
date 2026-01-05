import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bar, Line, Pie } from "react-chartjs-2";
import UseAxiosSequre from "../Hook/UseAxiosSequre";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardOverview = () => {
  const axiosSecure = UseAxiosSequre();
  const [overviewData, setOverviewData] = useState([]);
  const [chartData, setChartData] = useState({
    bar: {},
    line: {},
    pie: {},
  });
  const [tableData, setTableData] = useState([]);

  // Fetch backend data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Overview Cards
        const overviewRes = await axiosSecure.get("/userProfile");
        setOverviewData(overviewRes.data);

        // Chart Data
        const chartRes = await axiosSecure.get("/userProfile");
        setChartData(chartRes.data);

        // Table Data
        const tableRes = await axiosSecure.get("/userProfile");
        setTableData(tableRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-10">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg flex flex-col gap-2 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
          >
            <span className="text-sm">{item.title}</span>
            <span className="text-3xl font-bold">{item.value}</span>
            <span className="text-xs opacity-80">{item.subtitle}</span>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Sales Overview
          </h3>
          <Bar data={chartData.bar} options={{ responsive: true }} />
        </motion.div>

        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            User Growth
          </h3>
          <Line data={chartData.line} options={{ responsive: true }} />
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg md:col-span-2"
        >
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Product Category Distribution
          </h3>
          <Pie data={chartData.pie} options={{ responsive: true }} />
        </motion.div>
      </div>

      {/* Dynamic Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-4 text-gray-800 dark:text-gray-200">ID</th>
              <th className="p-4 text-gray-800 dark:text-gray-200">Name</th>
              <th className="p-4 text-gray-800 dark:text-gray-200">Email</th>
              <th className="p-4 text-gray-800 dark:text-gray-200">Role</th>
              <th className="p-4 text-gray-800 dark:text-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <td className="p-4 text-gray-700 dark:text-gray-200">{user.id}</td>
                <td className="p-4 text-gray-700 dark:text-gray-200">{user.name}</td>
                <td className="p-4 text-gray-700 dark:text-gray-200">{user.email}</td>
                <td className="p-4 text-gray-700 dark:text-gray-200">{user.role}</td>
                <td className="p-4 text-gray-700 dark:text-gray-200">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardOverview;
