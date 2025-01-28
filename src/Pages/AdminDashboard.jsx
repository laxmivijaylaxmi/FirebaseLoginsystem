
// import React from "react";
// import { FaHandPaper } from "react-icons/fa";
// import Chart from "../component/Chart/Chart";


// const AdminDashBoard = () => {


//   // const Card = ({ bgColor, title, value, percentage }) => {
//   //   return (
//   //     <div
//   //       className={`${bgColor} p-5 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl`}
//   //     >
//   //       <div className="bg-white p-1 rounded-full text-blue-600 w-19 px-4 flex justify-between">
//   //         <h1 className="text-lg font-bold">{percentage}%</h1>
//   //       </div>
//   //       <div className="mt-7">
//   //         <h1 className="text-3xl font-bold">{value}</h1>
//   //         <p className="text-gray-700 text-sm px-2">{title}</p>
//   //       </div>
//   //     </div>
//   //   );
//   // };
  


//   return (
//     <div className="flex w-full h-screen ">
//       <div className="w-full lg:w-4/5 p-5 lg:ml-64 mt-1 rounded-md shadow-md">
//         <h2
//           className="p-1 text-2xl flex items-center mb-6"
//           style={{ fontFamily: "Pacifico, cursive" }}
//         >
//           Hello{" "}
//           <span className="ml-2 animate-icon">
//             <FaHandPaper className="text-4xl mr-2 transition-transform duration-500 transform hover:scale-110" />
//           </span>{" "}
//           Welcome Admin
//         </h2>

//         <div className="h-full mt-4 text-black text-2xl p-5 rounded-md  shadow-lg">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Card 1 */}
//             <div className="bg-red-200 p-5 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
//               <div className="bg-white p-1 rounded-full text-blue-600 w-19 px-4 flex justify-between">
//                 <h1 className="text-lg font-bold">15%</h1>
//               </div>
//               <div className="mt-7">
//                 <h1 className="text-3xl font-bold">124,684</h1>
//                 <p className="text-gray-700 text-sm px-2">Students</p>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-yellow-200 p-5 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
//               <div className="bg-white p-1 rounded-full text-red-600 w-19 px-4 flex justify-between">
//                 <h1 className="text-lg font-bold">3%</h1>
//               </div>
//               <div className="mt-7">
//                 <h1 className="text-3xl font-bold">12,334</h1>
//                 <p className="text-gray-700 text-sm px-2">Teachers</p>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-red-200 p-5 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
//               <div className="bg-white p-1 rounded-full text-blue-600 w-19 px-4 flex justify-between">
//                 <h1 className="text-lg font-bold">3%</h1>
//               </div>
//               <div className="mt-7">
//                 <h1 className="text-3xl font-bold">29,300</h1>
//                 <p className="text-gray-700 text-sm px-2">Staffs</p>
//               </div>
//             </div>

//             {/* Card 4 */}
//             <div className="bg-yellow-200 p-5 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
//               <div className="bg-white p-1 rounded-full text-red-600 w-19 px-4 flex justify-between">
//                 <h1 className="text-lg font-bold">5%</h1>
//               </div>
//               <div className="mt-7">
//                 <h1 className="text-3xl font-bold">95,800</h1>
//                 <p className="text-gray-700 text-sm px-2">Awards</p>
//               </div>
//             </div>
//           </div>

//           <div className=" mt-9 p-5 bg-white rounded-md shadow-lg">
//           <h3 className="text-xl font-bold mb-4">Overall Performance</h3>
//           <Chart />
//         </div>
//         </div>
        
       
        

//       </div>
//     </div>
//   );
// };

// export default AdminDashBoard;

import React from "react";
import { FaHandPaper } from "react-icons/fa";
import Chart from "../component/Chart/Chart";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Pie Chart dependencies
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashBoard = () => {
  // Pie chart data
  const pieData = {
    labels: ["Students", "Teachers", "Staffs", "Awards"],
    datasets: [
      {
        data: [124684, 12334, 29300, 95800],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF4364", "#2F91D9", "#FFBA44", "#3ABEBE"],
        hoverOffset: 4,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex w-full h-screen ">
      <div className="w-full lg:w-4/5 p-5 lg:ml-64 mt-1 rounded-md shadow-md">
        <h2
          className="p-1 text-2xl flex items-center mb-6"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Hello{" "}
          <span className="ml-2 animate-icon">
            <FaHandPaper className="text-4xl mr-2 transition-transform duration-500 transform hover:scale-110" />
          </span>{" "}
          Welcome Admin
        </h2>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-black">
          {/* Card 1 */}
          <div className="bg-red-200 p-5 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="bg-white p-1 rounded-full text-blue-600 w-19 px-4 flex justify-between">
              <h1 className="text-lg font-bold">15%</h1>
            </div>
            <div className="mt-7">
              <h1 className="text-3xl font-bold">124,684</h1>
              <p className="text-gray-700 text-sm px-2">Students</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-200 p-5 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="bg-white p-1 rounded-full text-red-600 w-19 px-4 flex justify-between">
              <h1 className="text-lg font-bold">3%</h1>
            </div>
            <div className="mt-7">
              <h1 className="text-3xl font-bold">12,334</h1>
              <p className="text-gray-700 text-sm px-2">Teachers</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-red-200 p-5 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="bg-white p-1 rounded-full text-blue-600 w-19 px-4 flex justify-between">
              <h1 className="text-lg font-bold">3%</h1>
            </div>
            <div className="mt-7">
              <h1 className="text-3xl font-bold">29,300</h1>
              <p className="text-gray-700 text-sm px-2">Staffs</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-yellow-200 p-5 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="bg-white p-1 rounded-full text-red-600 w-19 px-4 flex justify-between">
              <h1 className="text-lg font-bold">5%</h1>
            </div>
            <div className="mt-7">
              <h1 className="text-3xl font-bold">95,800</h1>
              <p className="text-gray-700 text-sm px-2">Awards</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-9 p-5 bg-white rounded-md shadow-lg flex flex-wrap lg:flex-nowrap justify-between items-start gap-6">
  {/* Line Chart */}
  <div className="w-full lg:w-1/2 flex flex-col">
    <h3 className="text-lg font-semibold mb-3 text-black">Overall Performance</h3>
    <div className="w-full h-80">
      <Chart />
    </div>
  </div>

  {/* Pie Chart */}
  <div className="w-full lg:w-1/2 flex flex-col items-center">
    <h3 className="text-lg font-semibold mb-3">Data Distribution</h3>
    <div className="w-full h-64 flex justify-center">
      <Pie data={pieData} options={pieOptions} />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default AdminDashBoard;

