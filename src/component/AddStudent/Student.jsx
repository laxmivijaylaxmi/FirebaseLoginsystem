import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import {
  FaUser,
  FaIdCard,
  FaUniversity,
  FaUserGraduate,
  FaListAlt,
} from "react-icons/fa"; 
import { db } from "../../FireBase/FireBaseConfig";
import { collection,addDoc } from "firebase/firestore";

const Student = () => {
  const navigate = useNavigate();

 
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [section, setSection] = useState("");


  const handleSubmit = async(e) => {
    e.preventDefault();
    const studentData = { studentId, name, className, rollNumber, section };
   try{
    await addDoc(collection(db,"students"),studentData);
    
    toast.success("Student Added Successfully");
    navigate("/admin-dashboard/student-list")
   }
   catch(error){
    console.error("Error adding student:", error.message, error.code);
    toast.error("Error adding student:"+error.message)
   }

   
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col mb-3 w-90 max-w-lg p-8 rounded-xl shadow-lg bg-white text-black">
      <h1  style={{ fontFamily: "Pacifico, cursive" }}
        className="text-center mt-2 text-xl sm:text-2xl md:text-3xl font-semibold p-2">Student Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="relative">
            <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
              className="p-3 pl-10 w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 pl-10 w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaUniversity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Class"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
              className="p-3 pl-10 w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaUserGraduate className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Roll Number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              required
              className="p-3 pl-10 w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaListAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              required
              className="p-3 pl-10 w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <button
            type="submit"
            className="bg-blue-600 p-3 rounded-md text-white text-lg transition duration-300 hover:bg-blue-500 focus:outline-none"
          >
            Add Student
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin-dashboard/student-list")}
            className="bg-teal-500 p-3 rounded-md text-white text-lg transition duration-300 hover:bg-teal-600 focus:outline-none mt-3"
          >
            View Record
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Student;
