import React, { useEffect, useState } from "react"; 
import { useNavigate, useParams } from "react-router-dom";

 import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { FaUser, FaIdCard, FaUniversity, FaUserGraduate, FaListAlt } from "react-icons/fa"; 
import { toast, ToastContainer } from "react-toastify"; 
import { db } from "../../FireBase/FireBaseConfig";

const EditStudent = () => {
  const { id } = useParams(); // Retrieve the student ID from the URL
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
    studentId: "",
    name: "",
    className: "",
    rollNumber: "",
    section: "",
  });

  // Fetch the student data based on the student ID
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const docRef = doc(db, "students", id);
        console.log("Fetching data For ID:",id)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document Data:", docSnap.data()); // Debug
          setStudentData({ 
            studentId: "", 
            name: "", 
            className: "", 
            rollNumber: "", 
            section: "",
            ...docSnap.data() 
          });
        } else {
          toast.error("Student not found");
        }
      } catch (error) {
        toast.error("Error fetching student data: " + error.message);
      }
    };
    fetchStudentData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "students", id);
      await updateDoc(docRef, studentData);
      toast.success("Student data updated successfully");
      navigate("/admin-dashboard/student-list"); 
    } catch (error) {
      toast.error("Error updating student data: " + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col mb-3 w-90 max-w-lg p-8 rounded-xl shadow-lg bg-white text-black">
        <h1  style={{ fontFamily: "Pacifico, cursive" }}
        className="text-center mt-2 text-xl sm:text-2xl md:text-3xl font-semibold p-2">Edit Student</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="studentId"
              value={studentData.studentId}
              onChange={handleChange}
              placeholder="Student ID"
              required
              className="p-3 pl-10 w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="name"
              value={studentData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="p-3 pl-10 w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="relative">
            <FaUniversity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="className"
              value={studentData.className}
              onChange={handleChange}
              placeholder="Class"
              required
              className="p-3 pl-10 w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="relative">
            <FaUserGraduate className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="rollNumber"
              value={studentData.rollNumber}
              onChange={handleChange}
              placeholder="Roll Number"
              required
              className="p-3 pl-10 w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="relative">
            <FaListAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="section"
              value={studentData.section}
              onChange={handleChange}
              placeholder="Section"
              required
              className="p-3 pl-10 w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 p-3 rounded-md text-white text-lg transition duration-300 hover:bg-blue-500 focus:outline-none"
          >
            Update Student
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

export default EditStudent;
